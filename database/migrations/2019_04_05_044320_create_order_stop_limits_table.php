<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class CreateOrderStopLimitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_stop_limits', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id')->references('id')->on('users');
            $table->string('order_no', 50)->unique();
            $table->integer('currency_pair_id')->references('id')->on('currency_pairs');
            $table->decimal('stop', 15, 8);
            $table->decimal('limit', 15, 8);
            $table->decimal('amount', 15, 8);
            $table->string('side', 4);
            $table->string('remark', 100)->nullable()->default(NULL);
            $table->string('order_status',10);
            $table->decimal('fee', 15, 8)->nullable()->default(0);
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
        Schema::dropIfExists('order_stop_limits');
    }
}
