import {Model} from '@nozbe/watermelondb';
import {
  relation,
  field,
  readonly,
  date,
  action,
} from '@nozbe/watermelondb/decorators';

export default class Transaction extends Model {
  static table = 'transactions';
  static associations = {
    payments: {type: 'belongs_to', key: 'payment_id'},
  };

  @field('note') note;
  @field('amount') amount;
  @readonly @date('created_at') createdAt;
  @relation('payments', 'payment_id') payment;
}
