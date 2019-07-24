<?php

namespace App\Events;
use Illuminate\Http\Request;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;

class WalletAmount implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public $baseCurrency;
    public $mainCurrency;
    public function __construct($baseCurrency,$mainCurrency)
    {
        $this->baseCurrency = $baseCurrency;
        $this->mainCurrency = $mainCurrency;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('wallet_amount'.\Auth::id());
    }

    public function broadcastWith()
    {
        $request = new Request;
        $request->setMethod('POST');
        $request->request->add([
            'BaseCurrency' => $this->baseCurrency,
            'MainCurrency' => $this->mainCurrency
        ]);
        return [
            'data' => app('App\Http\Controllers\OrderController')->getWalletAmount($request)
        ];
    }
}
