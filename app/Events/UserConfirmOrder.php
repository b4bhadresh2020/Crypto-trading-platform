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

class UserConfirmOrder implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public $order;
    public function __construct($order)
    {
        $this->order = $order;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('user_confirm_order'.\Auth::id());
    }

    public function broadcastWith()
    {
        $request = new Request;
        $request->setMethod('POST');
        $request->request->add([
            'currency_pair_id' => $this->order->currency_pair_id,
            'order_status' => "Confirmed"
        ]);
        return [
            // 'data' => $this->order,
            'data' => app('App\Http\Controllers\OrderController')->tradeOrders($request)
        ];
    }
}
