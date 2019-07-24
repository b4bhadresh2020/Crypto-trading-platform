<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class CreateCurrencyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('currency', function (Blueprint $table) {
            $table->increments('id');
            $table->string('type',25);
            $table->string('name', 25);
            $table->string('name2', 25);
            $table->string('asset', 10);
            $table->boolean('active');
            $table->string('icon_link', 255)->nullable();
            $table->string('symbol', 255)->nullable();
            $table->integer('decimal_after');
            $table->integer('order');
            $table->boolean('has_wallet');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('currency');
    }
}
