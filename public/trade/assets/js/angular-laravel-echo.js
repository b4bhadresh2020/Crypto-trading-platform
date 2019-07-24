import { Observable, of, ReplaySubject, Subject, throwError } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, startWith } from 'rxjs/operators';
import Echo from 'laravel-echo';
import * as io from 'socket.io-client';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, NgZone, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * The token used to inject the config in Angular's DI system
  @type {?} */
const ECHO_CONFIG = new InjectionToken('echo.config');
/**
 * @hidden
 */
class TypeFormatter {
    /**
     * Constructs a new formatter instance
     *
     * @param {?} namespace The namespace of the notifications.
     */
    constructor(namespace) {
        /**
         * The namespace of the notifications.
         */
        this.namespace = null;
        this.setNamespace(namespace);
    }
    /**
     * Formats the supplied type
     *
     * @param {?} notificationType The FQN of the notification class
     * @return {?} The optimized type
     */
    format(notificationType) {
        if (!this.namespace) {
            return notificationType;
        }
        if (notificationType.indexOf(this.namespace) === 0) {
            return notificationType.substr(this.namespace.length);
        }
        return notificationType;
    }
    /**
     * Sets the namespace
     *
     * @param {?} namespace The namespace of the notifications.
     * @return {?} The instance for chaining
     */
    setNamespace(namespace) {
        this.namespace = namespace;
        return this;
    }
}
/**
 * The service class, use this as something like
 * (or use the [[AngularLaravelEchoModule.forRoot]] method):
 *
 * ```js
 * export const echoConfig: SocketIoEchoConfig = {
 *   userModel: 'App.User',
 *   notificationNamespace: 'App\\Notifications',
 *   options: {
 *     broadcaster: 'socket.io',
 *     host: window.location.hostname + ':6001'
 *   }
 * }
 *
 * \@NgModule({
 *   ...
 *   providers: [
 *     ...
 *     EchoService,
 *     { provide: ECHO_CONFIG, useValue: echoConfig }
 *     ...
 *   ]
 *   ...
 * })
 * ```
 *
 * and import it in your component as
 *
 * ```js
 * \@Component({
 * ...
 * })
 * export class ExampleComponent {
 *   constructor(echoService: EchoService) {
 *   }
 * }
 * ```
 */
class EchoService {
    /**
     * Create a new service instance.
     *
     * @param {?} ngZone NgZone instance
     * @param {?} config Service configuration
     */
    constructor(ngZone, config) {
        this.ngZone = ngZone;
        this.config = config;
        this.channels = [];
        this.notificationListeners = {};
        this.userChannelName = null;
        /** @type {?} */
        let options = Object.assign({}, config.options);
        if (options.broadcaster === 'socket.io') {
            options = Object.assign({
                client: io
            }, options);
        }
        this._echo = new Echo(options);
        this.options = this.echo.connector.options;
        this.typeFormatter = new TypeFormatter(config.notificationNamespace);
        switch (options.broadcaster) {
            case 'null':
                this.connectionState$ = of({ type: 'connected' });
                break;
            case 'socket.io':
                this.connectionState$ = new Observable(subscriber => {
                    /** @type {?} */
                    const socket = (/** @type {?} */ (this._echo.connector)).socket;
                    /** @type {?} */
                    const handleConnect = () => this.ngZone.run(() => subscriber.next({ type: 'connect' }));
                    /** @type {?} */
                    const handleConnectError = (error) => this.ngZone.run(() => subscriber.next({ type: 'connect_error', error }));
                    /** @type {?} */
                    const handleConnectTimeout = (timeout) => this.ngZone.run(() => subscriber.next({ type: 'connect_timeout', timeout }));
                    /** @type {?} */
                    const handleError = (error) => this.ngZone.run(() => subscriber.next({ type: 'error', error }));
                    /** @type {?} */
                    const handleDisconnect = (reason) => this.ngZone.run(() => subscriber.next({ type: 'disconnect', reason }));
                    /** @type {?} */
                    const handleReconnect = (attemptNumber) => this.ngZone.run(() => subscriber.next({ type: 'reconnect', attemptNumber }));
                    /** @type {?} */
                    const handleReconnectAttempt = (attemptNumber) => this.ngZone.run(() => subscriber.next({ type: 'reconnect_attempt', attemptNumber }));
                    /** @type {?} */
                    const handleReconnecting = (attemptNumber) => this.ngZone.run(() => subscriber.next({ type: 'reconnecting', attemptNumber }));
                    /** @type {?} */
                    const handleReconnectError = (error) => this.ngZone.run(() => subscriber.next({ type: 'reconnect_error', error }));
                    /** @type {?} */
                    const handleReconnectFailed = () => this.ngZone.run(() => subscriber.next({ type: 'reconnect_failed' }));
                    /** @type {?} */
                    const handlePing = () => this.ngZone.run(() => subscriber.next({ type: 'ping' }));
                    /** @type {?} */
                    const handlePong = (latency) => this.ngZone.run(() => subscriber.next({ type: 'pong', latency }));
                    socket.on('connect', handleConnect);
                    socket.on('connect_error', handleConnectError);
                    socket.on('connect_timeout', handleConnectTimeout);
                    socket.on('error', handleError);
                    socket.on('disconnect', handleDisconnect);
                    socket.on('reconnect', handleReconnect);
                    socket.on('reconnect_attempt', handleReconnectAttempt);
                    socket.on('reconnecting', handleReconnecting);
                    socket.on('reconnect_error', handleReconnectError);
                    socket.on('reconnect_failed', handleReconnectFailed);
                    socket.on('ping', handlePing);
                    socket.on('pong', handlePong);
                    return () => {
                        socket.off('connect', handleConnect);
                        socket.off('connect_error', handleConnectError);
                        socket.off('connect_timeout', handleConnectTimeout);
                        socket.off('error', handleError);
                        socket.off('disconnect', handleDisconnect);
                        socket.off('reconnect', handleReconnect);
                        socket.off('reconnect_attempt', handleReconnectAttempt);
                        socket.off('reconnecting', handleReconnecting);
                        socket.off('reconnect_error', handleReconnectError);
                        socket.off('reconnect_failed', handleReconnectFailed);
                        socket.off('ping', handlePing);
                        socket.off('pong', handlePong);
                    };
                }).pipe(shareReplay(1));
                break;
            case 'pusher':
                this.connectionState$ = new Observable(subscriber => {
                    /** @type {?} */
                    const socket = (/** @type {?} */ (this._echo.connector)).pusher.connection;
                    /** @type {?} */
                    const handleStateChange = ({ current }) => this.ngZone.run(() => subscriber.next({ type: current }));
                    /** @type {?} */
                    const handleConnectingIn = (delay) => this.ngZone.run(() => subscriber.next({ type: 'connecting_in', delay }));
                    socket.bind('state_change', handleStateChange);
                    socket.bind('connecting_in', handleConnectingIn);
                    return () => {
                        socket.unbind('state_change', handleStateChange);
                        socket.unbind('connecting_in', handleConnectingIn);
                    };
                }).pipe(shareReplay(1));
                break;
            default:
                this.connectionState$ = throwError(new Error('unsupported'));
                break;
        }
        this.connected$ = (/** @type {?} */ (this.connectionState$)).pipe(map(() => this.connected), startWith(this.connected), distinctUntilChanged(), shareReplay(1));
    }
    /**
     * Is the socket currently connected
     * @return {?}
     */
    get connected() {
        if (this.options.broadcaster === 'null') {
            // Null broadcaster is always connected
            return true;
        }
        if (this.options.broadcaster === 'pusher') {
            return (/** @type {?} */ (this._echo.connector)).pusher.connection.state === 'connected';
        }
        return (/** @type {?} */ (this._echo.connector)).socket.connected;
    }
    /**
     * Observable of connection state changes, emits true when connected and false when disconnected
     * @return {?}
     */
    get connectionState() {
        return this.connected$;
    }
    /**
     * Observable of raw events of the underlying connection
     * @return {?}
     */
    get rawConnectionState() {
        return this.connectionState$;
    }
    /**
     * The echo instance, can be used to implement any custom requirements outside of this service (remember to include NgZone.run calls)
     * @return {?}
     */
    get echo() {
        return this._echo;
    }
    /**
     * The socket ID
     * @return {?}
     */
    get socketId() {
        return this.echo.socketId();
    }
    /**
     * Gets the named and optionally typed channel from the channels array if it exists
     *
     * @param {?} name The name of the channel
     * @param {?=} type The type of channel to lookup
     * @return {?} The channel if found or null
     */
    getChannelFromArray(name, type = null) {
        /** @type {?} */
        const channel = this.channels.find(channel => channel.name === name);
        if (channel) {
            if (type && channel.type !== type) {
                throw new Error(`Channel ${name} is not a ${type} channel`);
            }
            return channel;
        }
        return null;
    }
    /**
     * Gets the named and optionally typed channel from the channels array or throws if it does not exist
     *
     * @param {?} name The name of the channel
     * @param {?=} type The type of channel to lookup
     * @return {?} The channel
     */
    requireChannelFromArray(name, type = null) {
        /** @type {?} */
        const channel = this.getChannelFromArray(name, type);
        if (!channel) {
            if (type) {
                throw new Error(`${type[0].toUpperCase()}${type.substr(1)} channel ${name} does not exist`);
            }
            throw new Error(`Channel ${name} does not exist`);
        }
        return channel;
    }
    /**
     * Fetch or create a public channel
     *
     * @param {?} name The name of the channel to join
     * @return {?} The fetched or created channel
     */
    publicChannel(name) {
        /** @type {?} */
        let channel = this.getChannelFromArray(name, 'public');
        if (channel) {
            return channel.channel;
        }
        /** @type {?} */
        const echoChannel = this.echo.channel(name);
        channel = {
            name,
            channel: echoChannel,
            type: 'public',
            listeners: {},
        };
        this.channels.push(channel);
        return echoChannel;
    }
    /**
     * Fetch or create a presence channel and subscribe to the presence events
     *
     * @param {?} name The name of the channel to join
     * @return {?} The fetched or created channel
     */
    presenceChannel(name) {
        /** @type {?} */
        let channel = this.getChannelFromArray(name, 'presence');
        if (channel) {
            return /** @type {?} */ (channel.channel);
        }
        /** @type {?} */
        const echoChannel = this.echo.join(name);
        channel = {
            name,
            channel: echoChannel,
            type: 'presence',
            listeners: {},
            users: null,
        };
        this.channels.push(channel);
        echoChannel.here((users) => {
            this.ngZone.run(() => {
                if (channel) {
                    channel.users = users;
                    if (channel.listeners['_users_']) {
                        channel.listeners['_users_'].next(JSON.parse(JSON.stringify(users)));
                    }
                }
            });
        });
        echoChannel.joining((user) => {
            this.ngZone.run(() => {
                if (channel) {
                    channel.users = channel.users || [];
                    channel.users.push(user);
                    if (channel.listeners['_joining_']) {
                        channel.listeners['_joining_'].next(JSON.parse(JSON.stringify(user)));
                    }
                }
            });
        });
        echoChannel.leaving((user) => {
            this.ngZone.run(() => {
                if (channel) {
                    channel.users = channel.users || [];
                    /** @type {?} */
                    const existing = channel.users.find(existing => existing == user);
                    if (existing) {
                        /** @type {?} */
                        const index = channel.users.indexOf(existing);
                        if (index !== -1) {
                            channel.users.splice(index, 1);
                        }
                    }
                    if (channel.listeners['_leaving_']) {
                        channel.listeners['_leaving_'].next(JSON.parse(JSON.stringify(user)));
                    }
                }
            });
        });
        return echoChannel;
    }
    /**
     * Fetch or create a private channel
     *
     * @param {?} name The name of the channel to join
     * @return {?} The fetched or created channel
     */
    privateChannel(name) {
        /** @type {?} */
        let channel = this.getChannelFromArray(name, 'private');
        if (channel) {
            return /** @type {?} */ (channel.channel);
        }
        /** @type {?} */
        const echoChannel = this.echo.private(name);
        channel = {
            name,
            channel: echoChannel,
            type: 'private',
            listeners: {},
        };
        this.channels.push(channel);
        return echoChannel;
    }
    /**
     * Set authentication data and connect to and start listening for notifications on the users private channel
     *
     * @param {?} headers Authentication headers to send when talking to the service
     * @param {?} userId The current user's id
     * @return {?} The instance for chaining
     */
    login(headers, userId) {
        /** @type {?} */
        const newChannelName = `${this.config.userModel.replace('\\', '.')}.${userId}`;
        if (this.userChannelName && this.userChannelName != newChannelName) {
            this.logout();
        }
        this.options.auth = this.options.auth || {};
        this.options.auth.headers = Object.assign({}, headers);
        if (this.options.broadcaster === 'pusher') {
            /** @type {?} */
            const connector = (/** @type {?} */ (this._echo.connector));
            if (connector.pusher.config.auth !== this.options.auth) {
                connector.pusher.config.auth = this.options.auth;
            }
        }
        if (this.userChannelName != newChannelName) {
            this.userChannelName = newChannelName;
            this.privateChannel(newChannelName).notification((notification) => {
                /** @type {?} */
                const type = this.typeFormatter.format(notification.type);
                if (this.notificationListeners[type]) {
                    this.ngZone.run(() => this.notificationListeners[type].next(notification));
                }
                if (this.notificationListeners['*']) {
                    this.ngZone.run(() => this.notificationListeners['*'].next(notification));
                }
            });
        }
        return this;
    }
    /**
     * Clear authentication data and close any presence or private channels.
     *
     * @return {?} The instance for chaining
     */
    logout() {
        this.channels
            .filter(channel => channel.type !== 'public')
            .forEach(channel => this.leave(channel.name));
        this.options.auth = this.options.auth || {};
        this.options.auth.headers = {};
        return this;
    }
    /**
     * Join a channel of specified name and type.
     *
     * @param {?} name The name of the channel to join
     * @param {?} type The type of channel to join
     * @return {?} The instance for chaining
     */
    join(name, type) {
        switch (type) {
            case 'public':
                this.publicChannel(name);
                break;
            case 'presence':
                this.presenceChannel(name);
                break;
            case 'private':
                this.privateChannel(name);
                break;
        }
        return this;
    }
    /**
     * Leave a channel of the specified name.
     *
     * @param {?} name The name of the channel to leave
     * @return {?} The instance for chaining
     */
    leave(name) {
        /** @type {?} */
        const channel = this.getChannelFromArray(name);
        if (channel) {
            this.echo.leave(name);
            Object.keys(channel.listeners).forEach(key => channel.listeners[key].complete());
            if (channel.notificationListeners) {
                Object.keys(channel.notificationListeners).forEach(key => channel.notificationListeners && channel.notificationListeners[key].complete());
            }
            /** @type {?} */
            const index = this.channels.indexOf(channel);
            if (index !== -1) {
                this.channels.splice(index, 1);
            }
        }
        return this;
    }
    /**
     * Listen for events on the specified channel.
     *
     * @param {?} name The name of the channel
     * @param {?} event The name of the event
     * @return {?} An observable that emits the event data of the specified event when it arrives
     */
    listen(name, event) {
        /** @type {?} */
        const channel = this.requireChannelFromArray(name);
        if (!channel.listeners[event]) {
            /** @type {?} */
            const listener = new Subject();
            channel.channel.listen(event, (event) => this.ngZone.run(() => listener.next(event)));
            channel.listeners[event] = listener;
        }
        return channel.listeners[event].asObservable();
    }
    /**
     * Listen for client sent events (whispers) on the specified private or presence channel channel.
     *
     * @param {?} name The name of the channel
     * @param {?} event The name of the event
     * @return {?} An observable that emits the whisper data of the specified event when it arrives
     */
    listenForWhisper(name, event) {
        /** @type {?} */
        const channel = this.requireChannelFromArray(name);
        if (channel.type === 'public') {
            return throwError(new Error('Whisper is not available on public channels'));
        }
        if (!channel.listeners[`_whisper_${event}_`]) {
            /** @type {?} */
            const listener = new Subject();
            channel.channel.listenForWhisper(event, (event) => this.ngZone.run(() => listener.next(event)));
            channel.listeners[`_whisper_${event}_`] = listener;
        }
        return channel.listeners[`_whisper_${event}_`].asObservable();
    }
    /**
     * Listen for notifications on the users private channel.
     *
     * @param {?} type The type of notification to listen for or `*` for any
     * @param {?=} name Optional a different channel to receive notifications on
     * @return {?} An observable that emits the notification of the specified type when it arrives
     */
    notification(type, name) {
        type = this.typeFormatter.format(type);
        if (name && name !== this.userChannelName) {
            /** @type {?} */
            const channel = this.requireChannelFromArray(name);
            if (!channel.notificationListeners) {
                channel.notificationListeners = {};
                channel.channel.notification((notification) => {
                    /** @type {?} */
                    const notificationType = this.typeFormatter.format(notification.type);
                    if (channel.notificationListeners) {
                        if (channel.notificationListeners[notificationType]) {
                            this.ngZone.run(() => channel.notificationListeners && channel.notificationListeners[notificationType].next(notification));
                        }
                        if (channel.notificationListeners['*']) {
                            this.ngZone.run(() => channel.notificationListeners && channel.notificationListeners['*'].next(notification));
                        }
                    }
                });
            }
            if (!channel.notificationListeners[type]) {
                channel.notificationListeners[type] = new Subject();
            }
            return channel.notificationListeners[type].asObservable();
        }
        if (!this.notificationListeners[type]) {
            this.notificationListeners[type] = new Subject();
        }
        return this.notificationListeners[type].asObservable();
    }
    /**
     * Listen for users joining the specified presence channel.
     *
     * @param {?} name The name of the channel
     * @return {?} An observable that emits the user when he joins the specified channel
     */
    joining(name) {
        /** @type {?} */
        const channel = this.requireChannelFromArray(name, 'presence');
        if (!channel.listeners[`_joining_`]) {
            channel.listeners['_joining_'] = new Subject();
        }
        return channel.listeners['_joining_'].asObservable();
    }
    /**
     * Listen for users leaving the specified presence channel.
     *
     * @param {?} name The name of the channel
     * @return {?} An observable that emits the user when he leaves the specified channel
     */
    leaving(name) {
        /** @type {?} */
        const channel = this.requireChannelFromArray(name, 'presence');
        if (!channel.listeners[`_leaving_`]) {
            channel.listeners['_leaving_'] = new Subject();
        }
        return channel.listeners['_leaving_'].asObservable();
    }
    /**
     * Listen for user list updates on the specified presence channel.
     *
     * @param {?} name The name of the channel
     * @return {?} An observable that emits the initial user list as soon as it's available
     */
    users(name) {
        /** @type {?} */
        const channel = this.requireChannelFromArray(name, 'presence');
        if (!channel.listeners[`_users_`]) {
            channel.listeners['_users_'] = new ReplaySubject(1);
        }
        return channel.listeners['_users_'].asObservable();
    }
    /**
     * Send a client event to the specified presence or private channel (whisper).
     *
     * @param {?} name The name of the channel
     * @param {?} event The name of the event
     * @param {?} data The payload for the event
     * @return {?} The instance for chaining
     */
    whisper(name, event, data) {
        /** @type {?} */
        const channel = this.requireChannelFromArray(name);
        if (channel.type === 'public') {
            throw new Error('Whisper is not available on public channels');
        }
        /** @type {?} */
        const echoChannel = /** @type {?} */ (channel.channel);
        echoChannel.whisper(event, data);
        return this;
    }
}
EchoService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
EchoService.ctorParameters = () => [
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [ECHO_CONFIG,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * An http interceptor to automatically add the socket ID header, use this as something like
 * (or use the [[AngularLaravelEchoModule.forRoot]] method):
 *
 * ```js
 * \@NgModule({
 *   ...
 *   providers: [
 *     ...
 *     { provide: HTTP_INTERCEPTORS, useClass: EchoInterceptor, multi: true }
 *     ...
 *   ]
 *   ...
 * })
 * ```
 */
class EchoInterceptor {
    /**
     * @param {?} echoService
     */
    constructor(echoService) {
        this.echoService = echoService;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        /** @type {?} */
        const socketId = this.echoService.socketId;
        if (this.echoService.connected && socketId) {
            req = req.clone({ headers: req.headers.append('X-Socket-ID', socketId) });
        }
        return next.handle(req);
    }
}
EchoInterceptor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
EchoInterceptor.ctorParameters = () => [
    { type: EchoService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Module definition, use [[forRoot]] for easy configuration
 * of the service and interceptor
 */
class AngularLaravelEchoModule {
    /**
     * Make the service and interceptor available for the current (root) module, it is recommended that this method
     * is only called from the root module otherwise multiple instances of the service and interceptor will be created
     * (one for each module it is called in)
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: AngularLaravelEchoModule,
            providers: [
                EchoService,
                { provide: HTTP_INTERCEPTORS, useClass: EchoInterceptor, multi: true },
                { provide: ECHO_CONFIG, useValue: config },
            ]
        };
    }
}
AngularLaravelEchoModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { EchoService, EchoInterceptor, AngularLaravelEchoModule, ECHO_CONFIG };
