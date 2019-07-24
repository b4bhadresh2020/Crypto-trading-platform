<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFunctionUpdateUpdatedAtColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::unprepared('CREATE OR REPLACE FUNCTION update_updated_at_column() 
            RETURNS TRIGGER AS $$
            BEGIN
                NEW.updated_at = now();
                RETURN NEW; 
            END;
            $$ language "plpgsql"');

        DB::unprepared('CREATE TRIGGER update_wallets_modtime BEFORE UPDATE ON wallets FOR EACH ROW EXECUTE PROCEDURE  update_updated_at_column();');
        DB::unprepared('CREATE TRIGGER update_currency_modtime BEFORE UPDATE ON currency FOR EACH ROW EXECUTE PROCEDURE  update_updated_at_column();');
        DB::unprepared('CREATE TRIGGER update_orders_modtime BEFORE UPDATE ON orders FOR EACH ROW EXECUTE PROCEDURE  update_updated_at_column();');
        DB::unprepared('CREATE TRIGGER update_currency_pairs_modtime BEFORE UPDATE ON currency_pairs FOR EACH ROW EXECUTE PROCEDURE  update_updated_at_column();');
        DB::unprepared('CREATE TRIGGER update_wallet_histories_modtime BEFORE UPDATE ON wallet_histories FOR EACH ROW EXECUTE PROCEDURE  update_updated_at_column();');
        DB::unprepared('CREATE TRIGGER update_order_stop_limits_modtime BEFORE UPDATE ON order_stop_limits FOR EACH ROW EXECUTE PROCEDURE  update_updated_at_column();');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        /* DB::unprepared('DROP TRIGGER update_wallets_modtime ON wallets CASCADE');
        DB::unprepared('DROP TRIGGER update_currency_modtime ON currency CASCADE');
        DB::unprepared('DROP TRIGGER update_orders_modtime ON orders CASCADE');
        DB::unprepared('DROP TRIGGER update_currency_pairs_modtime ON currency_pairs CASCADE');
        DB::unprepared('DROP TRIGGER update_wallet_histories_modtime ON wallet_histories CASCADE');
        DB::unprepared('DROP TRIGGER update_order_stop_limits_modtime ON order_stop_limits CASCADE'); */
    }
}
