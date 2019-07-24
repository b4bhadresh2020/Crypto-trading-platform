<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('order_no', 15)->unique();
            $table->integer('user_id')->references('id')->on('users');
            $table->integer('currency_pair_id')->references('id')->on('currency_pairs');
            $table->decimal('amount', 15, 8);
            $table->decimal('price', 15, 8);
            $table->string('order_type', 50);
            $table->string('side', 4);
            $table->string('remark', 100)->nullable()->default(NULL);
            $table->string('order_status',10);
            $table->decimal('fee',15, 8)->nullable()->default(0);
            $table->string('fee_remark', 100)->nullable()->default(NULL);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
