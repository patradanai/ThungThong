import {Model} from '@nozbe/watermelondb';
import {field, children} from '@nozbe/watermelondb/decorators';

export default class PaymentType extends Model {
  static table = 'payments';
  static associations = {
    transaction: {type: 'has_many', foreignKey: 'payment_id'},
  };

  @field('payment') payment;
  @children('transactions') transactions;
}
