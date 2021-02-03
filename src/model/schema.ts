import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'transactions',
      columns: [
        {name: 'amount', type: 'number'},
        {name: 'created_at', type: 'number'},
        {name: 'note', type: 'string', isOptional: true},
        {name: 'payment_id', type: 'string', isIndexed: true},
      ],
    }),
    tableSchema({
      name: 'payments',
      columns: [{name: 'payment', type: 'string'}],
    }),
  ],
});
