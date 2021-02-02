import {Model} from '@nozbe/watermelondb';
import {field, readonly, date} from '@nozbe/watermelondb/decorators';

export default class Transaction extends Model {
  static table = 'transactions';

  @field('note') note;
  @field('amount') amount;
  @readonly @date('created_at') createdAt;
}