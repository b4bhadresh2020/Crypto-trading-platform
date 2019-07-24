<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class CreateWalletHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wallet_histories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id')->references('id')->on('users');
            $table->string('source');
            $table->integer('context_id');
            $table->string('transaction_type');
            $table->decimal('amount', 15, 8);
            $table->string('remark', 100)->nullable()->default(NULL);
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
        Schema::dropIfExists('wallet_histories');
    }
}
