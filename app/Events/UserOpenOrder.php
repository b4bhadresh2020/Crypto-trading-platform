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

class UserOpenOrder implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public $order;
    public $orderStatus;
    public function __construct($order,$orderStatus = NULL)
    {
        $this->order = $order;
        $this->orderStatus = $orderStatus;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('user_open_order'.\Auth::id());
    }

    public function broadcastWith()
    {
        if($this->order->order_status == "Pending"){
            return [
                'data' => $this->order
            ];
        }
        if($this->order->order_status == "Confirmed" || $this->orderStatus == "Canceled"){
            $request = new Request;
            $request->setMethod('POST');
            $request->request->add([
                'currency_pair_id' => $this->order->currency_pair_id,
                'order_status' => "Pending"
            ]);
            return [
                'data' => app('App\Http\Controllers\OrderController')->tradeOrders($request)
            ];   
        }
    }
}
