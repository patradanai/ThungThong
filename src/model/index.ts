import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import Transaction from './transaction.model';
import PaymentType from './payment.model';
import schema from './schema';

const adapter = new SQLiteAdapter({
  schema,
});

const database = new Database({
  adapter,
  modelClasses: [Transaction, PaymentType],
  actionsEnabled: true,
});

/// ReactNativeFlipperDatabases - START

if (__DEV__) {
  // Import connectDatabases function
  const connectDatabases = require('react-native-flipper-databases').default;

  // Import required DBDrivers
  const WatermelonDBDriver = require('react-native-flipper-databases/src/drivers/watermelondb')
    .default;

  connectDatabases([
    new WatermelonDBDriver(database), // Pass in database definition
  ]);
}

export default database;
