
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model clients
 * 
 */
export type clients = $Result.DefaultSelection<Prisma.$clientsPayload>
/**
 * Model expenses
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type expenses = $Result.DefaultSelection<Prisma.$expensesPayload>
/**
 * Model menu_categories
 * 
 */
export type menu_categories = $Result.DefaultSelection<Prisma.$menu_categoriesPayload>
/**
 * Model menu_items
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type menu_items = $Result.DefaultSelection<Prisma.$menu_itemsPayload>
/**
 * Model order_lines
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type order_lines = $Result.DefaultSelection<Prisma.$order_linesPayload>
/**
 * Model orders
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model payments
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type payments = $Result.DefaultSelection<Prisma.$paymentsPayload>
/**
 * Model recipe_items
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type recipe_items = $Result.DefaultSelection<Prisma.$recipe_itemsPayload>
/**
 * Model stock_items
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type stock_items = $Result.DefaultSelection<Prisma.$stock_itemsPayload>
/**
 * Model stock_movements
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type stock_movements = $Result.DefaultSelection<Prisma.$stock_movementsPayload>
/**
 * Model users
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const order_status: {
  draft: 'draft',
  placed: 'placed',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type order_status = (typeof order_status)[keyof typeof order_status]


export const payment_method: {
  cash: 'cash',
  card: 'card',
  transfer: 'transfer'
};

export type payment_method = (typeof payment_method)[keyof typeof payment_method]


export const stock_movement_type: {
  in: 'in',
  out: 'out',
  adjustment: 'adjustment'
};

export type stock_movement_type = (typeof stock_movement_type)[keyof typeof stock_movement_type]

}

export type order_status = $Enums.order_status

export const order_status: typeof $Enums.order_status

export type payment_method = $Enums.payment_method

export const payment_method: typeof $Enums.payment_method

export type stock_movement_type = $Enums.stock_movement_type

export const stock_movement_type: typeof $Enums.stock_movement_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clients
 * const clients = await prisma.clients.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clients
   * const clients = await prisma.clients.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.clients`: Exposes CRUD operations for the **clients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.clients.findMany()
    * ```
    */
  get clients(): Prisma.clientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenses`: Exposes CRUD operations for the **expenses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expenses.findMany()
    * ```
    */
  get expenses(): Prisma.expensesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menu_categories`: Exposes CRUD operations for the **menu_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menu_categories
    * const menu_categories = await prisma.menu_categories.findMany()
    * ```
    */
  get menu_categories(): Prisma.menu_categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menu_items`: Exposes CRUD operations for the **menu_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menu_items
    * const menu_items = await prisma.menu_items.findMany()
    * ```
    */
  get menu_items(): Prisma.menu_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_lines`: Exposes CRUD operations for the **order_lines** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_lines
    * const order_lines = await prisma.order_lines.findMany()
    * ```
    */
  get order_lines(): Prisma.order_linesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.paymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipe_items`: Exposes CRUD operations for the **recipe_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipe_items
    * const recipe_items = await prisma.recipe_items.findMany()
    * ```
    */
  get recipe_items(): Prisma.recipe_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock_items`: Exposes CRUD operations for the **stock_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stock_items
    * const stock_items = await prisma.stock_items.findMany()
    * ```
    */
  get stock_items(): Prisma.stock_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock_movements`: Exposes CRUD operations for the **stock_movements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stock_movements
    * const stock_movements = await prisma.stock_movements.findMany()
    * ```
    */
  get stock_movements(): Prisma.stock_movementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.0
   * Query Engine version: 0c19ccc313cf9911a90d99d2ac2eb0280c76c513
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    clients: 'clients',
    expenses: 'expenses',
    menu_categories: 'menu_categories',
    menu_items: 'menu_items',
    order_lines: 'order_lines',
    orders: 'orders',
    payments: 'payments',
    recipe_items: 'recipe_items',
    stock_items: 'stock_items',
    stock_movements: 'stock_movements',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "clients" | "expenses" | "menu_categories" | "menu_items" | "order_lines" | "orders" | "payments" | "recipe_items" | "stock_items" | "stock_movements" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      clients: {
        payload: Prisma.$clientsPayload<ExtArgs>
        fields: Prisma.clientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          findFirst: {
            args: Prisma.clientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          findMany: {
            args: Prisma.clientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>[]
          }
          create: {
            args: Prisma.clientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          createMany: {
            args: Prisma.clientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>[]
          }
          delete: {
            args: Prisma.clientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          update: {
            args: Prisma.clientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          deleteMany: {
            args: Prisma.clientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>[]
          }
          upsert: {
            args: Prisma.clientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          aggregate: {
            args: Prisma.ClientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClients>
          }
          groupBy: {
            args: Prisma.clientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientsCountArgs<ExtArgs>
            result: $Utils.Optional<ClientsCountAggregateOutputType> | number
          }
        }
      }
      expenses: {
        payload: Prisma.$expensesPayload<ExtArgs>
        fields: Prisma.expensesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.expensesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.expensesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          findFirst: {
            args: Prisma.expensesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.expensesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          findMany: {
            args: Prisma.expensesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>[]
          }
          create: {
            args: Prisma.expensesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          createMany: {
            args: Prisma.expensesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.expensesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>[]
          }
          delete: {
            args: Prisma.expensesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          update: {
            args: Prisma.expensesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          deleteMany: {
            args: Prisma.expensesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.expensesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.expensesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>[]
          }
          upsert: {
            args: Prisma.expensesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          aggregate: {
            args: Prisma.ExpensesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenses>
          }
          groupBy: {
            args: Prisma.expensesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpensesGroupByOutputType>[]
          }
          count: {
            args: Prisma.expensesCountArgs<ExtArgs>
            result: $Utils.Optional<ExpensesCountAggregateOutputType> | number
          }
        }
      }
      menu_categories: {
        payload: Prisma.$menu_categoriesPayload<ExtArgs>
        fields: Prisma.menu_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.menu_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.menu_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload>
          }
          findFirst: {
            args: Prisma.menu_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.menu_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload>
          }
          findMany: {
            args: Prisma.menu_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload>[]
          }
          create: {
            args: Prisma.menu_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload>
          }
          createMany: {
            args: Prisma.menu_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.menu_categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload>[]
          }
          delete: {
            args: Prisma.menu_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload>
          }
          update: {
            args: Prisma.menu_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.menu_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.menu_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.menu_categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload>[]
          }
          upsert: {
            args: Prisma.menu_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Menu_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu_categories>
          }
          groupBy: {
            args: Prisma.menu_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Menu_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.menu_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Menu_categoriesCountAggregateOutputType> | number
          }
        }
      }
      menu_items: {
        payload: Prisma.$menu_itemsPayload<ExtArgs>
        fields: Prisma.menu_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.menu_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.menu_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_itemsPayload>
          }
          findFirst: {
            args: Prisma.menu_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.menu_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_itemsPayload>
          }
          findMany: {
            args: Prisma.menu_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_itemsPayload>[]
          }
          create: {
            args: Prisma.menu_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_itemsPayload>
          }
          createMany: {
            args: Prisma.menu_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.menu_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_itemsPayload>[]
          }
          delete: {
            args: Prisma.menu_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_itemsPayload>
          }
          update: {
            args: Prisma.menu_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_itemsPayload>
          }
          deleteMany: {
            args: Prisma.menu_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.menu_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.menu_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_itemsPayload>[]
          }
          upsert: {
            args: Prisma.menu_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_itemsPayload>
          }
          aggregate: {
            args: Prisma.Menu_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu_items>
          }
          groupBy: {
            args: Prisma.menu_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Menu_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.menu_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Menu_itemsCountAggregateOutputType> | number
          }
        }
      }
      order_lines: {
        payload: Prisma.$order_linesPayload<ExtArgs>
        fields: Prisma.order_linesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_linesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_linesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload>
          }
          findFirst: {
            args: Prisma.order_linesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_linesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload>
          }
          findMany: {
            args: Prisma.order_linesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload>[]
          }
          create: {
            args: Prisma.order_linesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload>
          }
          createMany: {
            args: Prisma.order_linesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.order_linesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload>[]
          }
          delete: {
            args: Prisma.order_linesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload>
          }
          update: {
            args: Prisma.order_linesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload>
          }
          deleteMany: {
            args: Prisma.order_linesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_linesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.order_linesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload>[]
          }
          upsert: {
            args: Prisma.order_linesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload>
          }
          aggregate: {
            args: Prisma.Order_linesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_lines>
          }
          groupBy: {
            args: Prisma.order_linesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_linesGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_linesCountArgs<ExtArgs>
            result: $Utils.Optional<Order_linesCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      payments: {
        payload: Prisma.$paymentsPayload<ExtArgs>
        fields: Prisma.paymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findFirst: {
            args: Prisma.paymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findMany: {
            args: Prisma.paymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          create: {
            args: Prisma.paymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          createMany: {
            args: Prisma.paymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          delete: {
            args: Prisma.paymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          update: {
            args: Prisma.paymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          deleteMany: {
            args: Prisma.paymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          upsert: {
            args: Prisma.paymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.paymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      recipe_items: {
        payload: Prisma.$recipe_itemsPayload<ExtArgs>
        fields: Prisma.recipe_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recipe_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recipe_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_itemsPayload>
          }
          findFirst: {
            args: Prisma.recipe_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recipe_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_itemsPayload>
          }
          findMany: {
            args: Prisma.recipe_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_itemsPayload>[]
          }
          create: {
            args: Prisma.recipe_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_itemsPayload>
          }
          createMany: {
            args: Prisma.recipe_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.recipe_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_itemsPayload>[]
          }
          delete: {
            args: Prisma.recipe_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_itemsPayload>
          }
          update: {
            args: Prisma.recipe_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_itemsPayload>
          }
          deleteMany: {
            args: Prisma.recipe_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recipe_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.recipe_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_itemsPayload>[]
          }
          upsert: {
            args: Prisma.recipe_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_itemsPayload>
          }
          aggregate: {
            args: Prisma.Recipe_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe_items>
          }
          groupBy: {
            args: Prisma.recipe_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Recipe_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.recipe_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Recipe_itemsCountAggregateOutputType> | number
          }
        }
      }
      stock_items: {
        payload: Prisma.$stock_itemsPayload<ExtArgs>
        fields: Prisma.stock_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stock_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stock_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_itemsPayload>
          }
          findFirst: {
            args: Prisma.stock_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stock_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_itemsPayload>
          }
          findMany: {
            args: Prisma.stock_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_itemsPayload>[]
          }
          create: {
            args: Prisma.stock_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_itemsPayload>
          }
          createMany: {
            args: Prisma.stock_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stock_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_itemsPayload>[]
          }
          delete: {
            args: Prisma.stock_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_itemsPayload>
          }
          update: {
            args: Prisma.stock_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_itemsPayload>
          }
          deleteMany: {
            args: Prisma.stock_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stock_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stock_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_itemsPayload>[]
          }
          upsert: {
            args: Prisma.stock_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_itemsPayload>
          }
          aggregate: {
            args: Prisma.Stock_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock_items>
          }
          groupBy: {
            args: Prisma.stock_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stock_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.stock_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Stock_itemsCountAggregateOutputType> | number
          }
        }
      }
      stock_movements: {
        payload: Prisma.$stock_movementsPayload<ExtArgs>
        fields: Prisma.stock_movementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stock_movementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stock_movementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movementsPayload>
          }
          findFirst: {
            args: Prisma.stock_movementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stock_movementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movementsPayload>
          }
          findMany: {
            args: Prisma.stock_movementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movementsPayload>[]
          }
          create: {
            args: Prisma.stock_movementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movementsPayload>
          }
          createMany: {
            args: Prisma.stock_movementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stock_movementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movementsPayload>[]
          }
          delete: {
            args: Prisma.stock_movementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movementsPayload>
          }
          update: {
            args: Prisma.stock_movementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movementsPayload>
          }
          deleteMany: {
            args: Prisma.stock_movementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stock_movementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stock_movementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movementsPayload>[]
          }
          upsert: {
            args: Prisma.stock_movementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movementsPayload>
          }
          aggregate: {
            args: Prisma.Stock_movementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock_movements>
          }
          groupBy: {
            args: Prisma.stock_movementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stock_movementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.stock_movementsCountArgs<ExtArgs>
            result: $Utils.Optional<Stock_movementsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    clients?: clientsOmit
    expenses?: expensesOmit
    menu_categories?: menu_categoriesOmit
    menu_items?: menu_itemsOmit
    order_lines?: order_linesOmit
    orders?: ordersOmit
    payments?: paymentsOmit
    recipe_items?: recipe_itemsOmit
    stock_items?: stock_itemsOmit
    stock_movements?: stock_movementsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientsCountOutputType
   */

  export type ClientsCountOutputType = {
    orders: number
  }

  export type ClientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ClientsCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsCountOutputType
     */
    select?: ClientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * Count Type Menu_categoriesCountOutputType
   */

  export type Menu_categoriesCountOutputType = {
    menu_items: number
  }

  export type Menu_categoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu_items?: boolean | Menu_categoriesCountOutputTypeCountMenu_itemsArgs
  }

  // Custom InputTypes
  /**
   * Menu_categoriesCountOutputType without action
   */
  export type Menu_categoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu_categoriesCountOutputType
     */
    select?: Menu_categoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Menu_categoriesCountOutputType without action
   */
  export type Menu_categoriesCountOutputTypeCountMenu_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menu_itemsWhereInput
  }


  /**
   * Count Type Menu_itemsCountOutputType
   */

  export type Menu_itemsCountOutputType = {
    order_lines: number
    recipe_items: number
  }

  export type Menu_itemsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_lines?: boolean | Menu_itemsCountOutputTypeCountOrder_linesArgs
    recipe_items?: boolean | Menu_itemsCountOutputTypeCountRecipe_itemsArgs
  }

  // Custom InputTypes
  /**
   * Menu_itemsCountOutputType without action
   */
  export type Menu_itemsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu_itemsCountOutputType
     */
    select?: Menu_itemsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Menu_itemsCountOutputType without action
   */
  export type Menu_itemsCountOutputTypeCountOrder_linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_linesWhereInput
  }

  /**
   * Menu_itemsCountOutputType without action
   */
  export type Menu_itemsCountOutputTypeCountRecipe_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipe_itemsWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_lines: number
    payments: number
    stock_movements: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_lines?: boolean | OrdersCountOutputTypeCountOrder_linesArgs
    payments?: boolean | OrdersCountOutputTypeCountPaymentsArgs
    stock_movements?: boolean | OrdersCountOutputTypeCountStock_movementsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_linesWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountStock_movementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stock_movementsWhereInput
  }


  /**
   * Count Type Stock_itemsCountOutputType
   */

  export type Stock_itemsCountOutputType = {
    recipe_items: number
    stock_movements: number
  }

  export type Stock_itemsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe_items?: boolean | Stock_itemsCountOutputTypeCountRecipe_itemsArgs
    stock_movements?: boolean | Stock_itemsCountOutputTypeCountStock_movementsArgs
  }

  // Custom InputTypes
  /**
   * Stock_itemsCountOutputType without action
   */
  export type Stock_itemsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock_itemsCountOutputType
     */
    select?: Stock_itemsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Stock_itemsCountOutputType without action
   */
  export type Stock_itemsCountOutputTypeCountRecipe_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipe_itemsWhereInput
  }

  /**
   * Stock_itemsCountOutputType without action
   */
  export type Stock_itemsCountOutputTypeCountStock_movementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stock_movementsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    expenses: number
    orders: number
    payments: number
    stock_movements: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | UsersCountOutputTypeCountExpensesArgs
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
    payments?: boolean | UsersCountOutputTypeCountPaymentsArgs
    stock_movements?: boolean | UsersCountOutputTypeCountStock_movementsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expensesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountStock_movementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stock_movementsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model clients
   */

  export type AggregateClients = {
    _count: ClientsCountAggregateOutputType | null
    _avg: ClientsAvgAggregateOutputType | null
    _sum: ClientsSumAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  export type ClientsAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientsSumAggregateOutputType = {
    id: number | null
  }

  export type ClientsMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    created_at: Date | null
  }

  export type ClientsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    created_at: Date | null
  }

  export type ClientsCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    created_at: number
    _all: number
  }


  export type ClientsAvgAggregateInputType = {
    id?: true
  }

  export type ClientsSumAggregateInputType = {
    id?: true
  }

  export type ClientsMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    created_at?: true
  }

  export type ClientsMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    created_at?: true
  }

  export type ClientsCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    created_at?: true
    _all?: true
  }

  export type ClientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clients to aggregate.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clients
    **/
    _count?: true | ClientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientsMaxAggregateInputType
  }

  export type GetClientsAggregateType<T extends ClientsAggregateArgs> = {
        [P in keyof T & keyof AggregateClients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClients[P]>
      : GetScalarType<T[P], AggregateClients[P]>
  }




  export type clientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientsWhereInput
    orderBy?: clientsOrderByWithAggregationInput | clientsOrderByWithAggregationInput[]
    by: ClientsScalarFieldEnum[] | ClientsScalarFieldEnum
    having?: clientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientsCountAggregateInputType | true
    _avg?: ClientsAvgAggregateInputType
    _sum?: ClientsSumAggregateInputType
    _min?: ClientsMinAggregateInputType
    _max?: ClientsMaxAggregateInputType
  }

  export type ClientsGroupByOutputType = {
    id: number
    name: string
    phone: string | null
    email: string | null
    created_at: Date | null
    _count: ClientsCountAggregateOutputType | null
    _avg: ClientsAvgAggregateOutputType | null
    _sum: ClientsSumAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  type GetClientsGroupByPayload<T extends clientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientsGroupByOutputType[P]>
            : GetScalarType<T[P], ClientsGroupByOutputType[P]>
        }
      >
    >


  export type clientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    created_at?: boolean
    orders?: boolean | clients$ordersArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clients"]>

  export type clientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["clients"]>

  export type clientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["clients"]>

  export type clientsSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    created_at?: boolean
  }

  export type clientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "created_at", ExtArgs["result"]["clients"]>
  export type clientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | clients$ordersArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type clientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type clientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $clientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clients"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string | null
      email: string | null
      created_at: Date | null
    }, ExtArgs["result"]["clients"]>
    composites: {}
  }

  type clientsGetPayload<S extends boolean | null | undefined | clientsDefaultArgs> = $Result.GetResult<Prisma.$clientsPayload, S>

  type clientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientsCountAggregateInputType | true
    }

  export interface clientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clients'], meta: { name: 'clients' } }
    /**
     * Find zero or one Clients that matches the filter.
     * @param {clientsFindUniqueArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clientsFindUniqueArgs>(args: SelectSubset<T, clientsFindUniqueArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clientsFindUniqueOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clientsFindUniqueOrThrowArgs>(args: SelectSubset<T, clientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindFirstArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clientsFindFirstArgs>(args?: SelectSubset<T, clientsFindFirstArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindFirstOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clientsFindFirstOrThrowArgs>(args?: SelectSubset<T, clientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.clients.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.clients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientsWithIdOnly = await prisma.clients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clientsFindManyArgs>(args?: SelectSubset<T, clientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clients.
     * @param {clientsCreateArgs} args - Arguments to create a Clients.
     * @example
     * // Create one Clients
     * const Clients = await prisma.clients.create({
     *   data: {
     *     // ... data to create a Clients
     *   }
     * })
     * 
     */
    create<T extends clientsCreateArgs>(args: SelectSubset<T, clientsCreateArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {clientsCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clientsCreateManyArgs>(args?: SelectSubset<T, clientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {clientsCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientsWithIdOnly = await prisma.clients.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clientsCreateManyAndReturnArgs>(args?: SelectSubset<T, clientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clients.
     * @param {clientsDeleteArgs} args - Arguments to delete one Clients.
     * @example
     * // Delete one Clients
     * const Clients = await prisma.clients.delete({
     *   where: {
     *     // ... filter to delete one Clients
     *   }
     * })
     * 
     */
    delete<T extends clientsDeleteArgs>(args: SelectSubset<T, clientsDeleteArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clients.
     * @param {clientsUpdateArgs} args - Arguments to update one Clients.
     * @example
     * // Update one Clients
     * const clients = await prisma.clients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clientsUpdateArgs>(args: SelectSubset<T, clientsUpdateArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {clientsDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.clients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clientsDeleteManyArgs>(args?: SelectSubset<T, clientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clientsUpdateManyArgs>(args: SelectSubset<T, clientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {clientsUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientsWithIdOnly = await prisma.clients.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends clientsUpdateManyAndReturnArgs>(args: SelectSubset<T, clientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clients.
     * @param {clientsUpsertArgs} args - Arguments to update or create a Clients.
     * @example
     * // Update or create a Clients
     * const clients = await prisma.clients.upsert({
     *   create: {
     *     // ... data to create a Clients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clients we want to update
     *   }
     * })
     */
    upsert<T extends clientsUpsertArgs>(args: SelectSubset<T, clientsUpsertArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.clients.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends clientsCountArgs>(
      args?: Subset<T, clientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientsAggregateArgs>(args: Subset<T, ClientsAggregateArgs>): Prisma.PrismaPromise<GetClientsAggregateType<T>>

    /**
     * Group by Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientsGroupByArgs['orderBy'] }
        : { orderBy?: clientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clients model
   */
  readonly fields: clientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends clients$ordersArgs<ExtArgs> = {}>(args?: Subset<T, clients$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clients model
   */
  interface clientsFieldRefs {
    readonly id: FieldRef<"clients", 'Int'>
    readonly name: FieldRef<"clients", 'String'>
    readonly phone: FieldRef<"clients", 'String'>
    readonly email: FieldRef<"clients", 'String'>
    readonly created_at: FieldRef<"clients", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * clients findUnique
   */
  export type clientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients findUniqueOrThrow
   */
  export type clientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients findFirst
   */
  export type clientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * clients findFirstOrThrow
   */
  export type clientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * clients findMany
   */
  export type clientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * clients create
   */
  export type clientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * The data needed to create a clients.
     */
    data: XOR<clientsCreateInput, clientsUncheckedCreateInput>
  }

  /**
   * clients createMany
   */
  export type clientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clients.
     */
    data: clientsCreateManyInput | clientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clients createManyAndReturn
   */
  export type clientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * The data used to create many clients.
     */
    data: clientsCreateManyInput | clientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clients update
   */
  export type clientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * The data needed to update a clients.
     */
    data: XOR<clientsUpdateInput, clientsUncheckedUpdateInput>
    /**
     * Choose, which clients to update.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients updateMany
   */
  export type clientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clients.
     */
    data: XOR<clientsUpdateManyMutationInput, clientsUncheckedUpdateManyInput>
    /**
     * Filter which clients to update
     */
    where?: clientsWhereInput
    /**
     * Limit how many clients to update.
     */
    limit?: number
  }

  /**
   * clients updateManyAndReturn
   */
  export type clientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * The data used to update clients.
     */
    data: XOR<clientsUpdateManyMutationInput, clientsUncheckedUpdateManyInput>
    /**
     * Filter which clients to update
     */
    where?: clientsWhereInput
    /**
     * Limit how many clients to update.
     */
    limit?: number
  }

  /**
   * clients upsert
   */
  export type clientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * The filter to search for the clients to update in case it exists.
     */
    where: clientsWhereUniqueInput
    /**
     * In case the clients found by the `where` argument doesn't exist, create a new clients with this data.
     */
    create: XOR<clientsCreateInput, clientsUncheckedCreateInput>
    /**
     * In case the clients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientsUpdateInput, clientsUncheckedUpdateInput>
  }

  /**
   * clients delete
   */
  export type clientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter which clients to delete.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients deleteMany
   */
  export type clientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clients to delete
     */
    where?: clientsWhereInput
    /**
     * Limit how many clients to delete.
     */
    limit?: number
  }

  /**
   * clients.orders
   */
  export type clients$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * clients without action
   */
  export type clientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
  }


  /**
   * Model expenses
   */

  export type AggregateExpenses = {
    _count: ExpensesCountAggregateOutputType | null
    _avg: ExpensesAvgAggregateOutputType | null
    _sum: ExpensesSumAggregateOutputType | null
    _min: ExpensesMinAggregateOutputType | null
    _max: ExpensesMaxAggregateOutputType | null
  }

  export type ExpensesAvgAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    created_by: number | null
  }

  export type ExpensesSumAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    created_by: number | null
  }

  export type ExpensesMinAggregateOutputType = {
    id: number | null
    category: string | null
    amount: Decimal | null
    description: string | null
    receipt_reference: string | null
    incurred_at: Date | null
    created_by: number | null
  }

  export type ExpensesMaxAggregateOutputType = {
    id: number | null
    category: string | null
    amount: Decimal | null
    description: string | null
    receipt_reference: string | null
    incurred_at: Date | null
    created_by: number | null
  }

  export type ExpensesCountAggregateOutputType = {
    id: number
    category: number
    amount: number
    description: number
    receipt_reference: number
    incurred_at: number
    created_by: number
    _all: number
  }


  export type ExpensesAvgAggregateInputType = {
    id?: true
    amount?: true
    created_by?: true
  }

  export type ExpensesSumAggregateInputType = {
    id?: true
    amount?: true
    created_by?: true
  }

  export type ExpensesMinAggregateInputType = {
    id?: true
    category?: true
    amount?: true
    description?: true
    receipt_reference?: true
    incurred_at?: true
    created_by?: true
  }

  export type ExpensesMaxAggregateInputType = {
    id?: true
    category?: true
    amount?: true
    description?: true
    receipt_reference?: true
    incurred_at?: true
    created_by?: true
  }

  export type ExpensesCountAggregateInputType = {
    id?: true
    category?: true
    amount?: true
    description?: true
    receipt_reference?: true
    incurred_at?: true
    created_by?: true
    _all?: true
  }

  export type ExpensesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expenses to aggregate.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned expenses
    **/
    _count?: true | ExpensesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpensesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpensesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpensesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpensesMaxAggregateInputType
  }

  export type GetExpensesAggregateType<T extends ExpensesAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenses[P]>
      : GetScalarType<T[P], AggregateExpenses[P]>
  }




  export type expensesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expensesWhereInput
    orderBy?: expensesOrderByWithAggregationInput | expensesOrderByWithAggregationInput[]
    by: ExpensesScalarFieldEnum[] | ExpensesScalarFieldEnum
    having?: expensesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpensesCountAggregateInputType | true
    _avg?: ExpensesAvgAggregateInputType
    _sum?: ExpensesSumAggregateInputType
    _min?: ExpensesMinAggregateInputType
    _max?: ExpensesMaxAggregateInputType
  }

  export type ExpensesGroupByOutputType = {
    id: number
    category: string
    amount: Decimal
    description: string
    receipt_reference: string | null
    incurred_at: Date | null
    created_by: number | null
    _count: ExpensesCountAggregateOutputType | null
    _avg: ExpensesAvgAggregateOutputType | null
    _sum: ExpensesSumAggregateOutputType | null
    _min: ExpensesMinAggregateOutputType | null
    _max: ExpensesMaxAggregateOutputType | null
  }

  type GetExpensesGroupByPayload<T extends expensesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpensesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpensesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpensesGroupByOutputType[P]>
            : GetScalarType<T[P], ExpensesGroupByOutputType[P]>
        }
      >
    >


  export type expensesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    receipt_reference?: boolean
    incurred_at?: boolean
    created_by?: boolean
    users?: boolean | expenses$usersArgs<ExtArgs>
  }, ExtArgs["result"]["expenses"]>

  export type expensesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    receipt_reference?: boolean
    incurred_at?: boolean
    created_by?: boolean
    users?: boolean | expenses$usersArgs<ExtArgs>
  }, ExtArgs["result"]["expenses"]>

  export type expensesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    receipt_reference?: boolean
    incurred_at?: boolean
    created_by?: boolean
    users?: boolean | expenses$usersArgs<ExtArgs>
  }, ExtArgs["result"]["expenses"]>

  export type expensesSelectScalar = {
    id?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    receipt_reference?: boolean
    incurred_at?: boolean
    created_by?: boolean
  }

  export type expensesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "amount" | "description" | "receipt_reference" | "incurred_at" | "created_by", ExtArgs["result"]["expenses"]>
  export type expensesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | expenses$usersArgs<ExtArgs>
  }
  export type expensesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | expenses$usersArgs<ExtArgs>
  }
  export type expensesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | expenses$usersArgs<ExtArgs>
  }

  export type $expensesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "expenses"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: string
      amount: Prisma.Decimal
      description: string
      receipt_reference: string | null
      incurred_at: Date | null
      created_by: number | null
    }, ExtArgs["result"]["expenses"]>
    composites: {}
  }

  type expensesGetPayload<S extends boolean | null | undefined | expensesDefaultArgs> = $Result.GetResult<Prisma.$expensesPayload, S>

  type expensesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<expensesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpensesCountAggregateInputType | true
    }

  export interface expensesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['expenses'], meta: { name: 'expenses' } }
    /**
     * Find zero or one Expenses that matches the filter.
     * @param {expensesFindUniqueArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends expensesFindUniqueArgs>(args: SelectSubset<T, expensesFindUniqueArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expenses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {expensesFindUniqueOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends expensesFindUniqueOrThrowArgs>(args: SelectSubset<T, expensesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesFindFirstArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends expensesFindFirstArgs>(args?: SelectSubset<T, expensesFindFirstArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expenses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesFindFirstOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends expensesFindFirstOrThrowArgs>(args?: SelectSubset<T, expensesFindFirstOrThrowArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expenses.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expenses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expensesWithIdOnly = await prisma.expenses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends expensesFindManyArgs>(args?: SelectSubset<T, expensesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expenses.
     * @param {expensesCreateArgs} args - Arguments to create a Expenses.
     * @example
     * // Create one Expenses
     * const Expenses = await prisma.expenses.create({
     *   data: {
     *     // ... data to create a Expenses
     *   }
     * })
     * 
     */
    create<T extends expensesCreateArgs>(args: SelectSubset<T, expensesCreateArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {expensesCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expenses = await prisma.expenses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends expensesCreateManyArgs>(args?: SelectSubset<T, expensesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {expensesCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expenses = await prisma.expenses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expensesWithIdOnly = await prisma.expenses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends expensesCreateManyAndReturnArgs>(args?: SelectSubset<T, expensesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expenses.
     * @param {expensesDeleteArgs} args - Arguments to delete one Expenses.
     * @example
     * // Delete one Expenses
     * const Expenses = await prisma.expenses.delete({
     *   where: {
     *     // ... filter to delete one Expenses
     *   }
     * })
     * 
     */
    delete<T extends expensesDeleteArgs>(args: SelectSubset<T, expensesDeleteArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expenses.
     * @param {expensesUpdateArgs} args - Arguments to update one Expenses.
     * @example
     * // Update one Expenses
     * const expenses = await prisma.expenses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends expensesUpdateArgs>(args: SelectSubset<T, expensesUpdateArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {expensesDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expenses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends expensesDeleteManyArgs>(args?: SelectSubset<T, expensesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expenses = await prisma.expenses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends expensesUpdateManyArgs>(args: SelectSubset<T, expensesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {expensesUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expenses = await prisma.expenses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expensesWithIdOnly = await prisma.expenses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends expensesUpdateManyAndReturnArgs>(args: SelectSubset<T, expensesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expenses.
     * @param {expensesUpsertArgs} args - Arguments to update or create a Expenses.
     * @example
     * // Update or create a Expenses
     * const expenses = await prisma.expenses.upsert({
     *   create: {
     *     // ... data to create a Expenses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expenses we want to update
     *   }
     * })
     */
    upsert<T extends expensesUpsertArgs>(args: SelectSubset<T, expensesUpsertArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expenses.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends expensesCountArgs>(
      args?: Subset<T, expensesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpensesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpensesAggregateArgs>(args: Subset<T, ExpensesAggregateArgs>): Prisma.PrismaPromise<GetExpensesAggregateType<T>>

    /**
     * Group by Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends expensesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: expensesGroupByArgs['orderBy'] }
        : { orderBy?: expensesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, expensesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpensesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the expenses model
   */
  readonly fields: expensesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for expenses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__expensesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends expenses$usersArgs<ExtArgs> = {}>(args?: Subset<T, expenses$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the expenses model
   */
  interface expensesFieldRefs {
    readonly id: FieldRef<"expenses", 'Int'>
    readonly category: FieldRef<"expenses", 'String'>
    readonly amount: FieldRef<"expenses", 'Decimal'>
    readonly description: FieldRef<"expenses", 'String'>
    readonly receipt_reference: FieldRef<"expenses", 'String'>
    readonly incurred_at: FieldRef<"expenses", 'DateTime'>
    readonly created_by: FieldRef<"expenses", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * expenses findUnique
   */
  export type expensesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses findUniqueOrThrow
   */
  export type expensesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses findFirst
   */
  export type expensesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expenses.
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * expenses findFirstOrThrow
   */
  export type expensesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expenses.
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * expenses findMany
   */
  export type expensesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing expenses.
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * expenses create
   */
  export type expensesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * The data needed to create a expenses.
     */
    data: XOR<expensesCreateInput, expensesUncheckedCreateInput>
  }

  /**
   * expenses createMany
   */
  export type expensesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many expenses.
     */
    data: expensesCreateManyInput | expensesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * expenses createManyAndReturn
   */
  export type expensesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * The data used to create many expenses.
     */
    data: expensesCreateManyInput | expensesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * expenses update
   */
  export type expensesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * The data needed to update a expenses.
     */
    data: XOR<expensesUpdateInput, expensesUncheckedUpdateInput>
    /**
     * Choose, which expenses to update.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses updateMany
   */
  export type expensesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update expenses.
     */
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyInput>
    /**
     * Filter which expenses to update
     */
    where?: expensesWhereInput
    /**
     * Limit how many expenses to update.
     */
    limit?: number
  }

  /**
   * expenses updateManyAndReturn
   */
  export type expensesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * The data used to update expenses.
     */
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyInput>
    /**
     * Filter which expenses to update
     */
    where?: expensesWhereInput
    /**
     * Limit how many expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * expenses upsert
   */
  export type expensesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * The filter to search for the expenses to update in case it exists.
     */
    where: expensesWhereUniqueInput
    /**
     * In case the expenses found by the `where` argument doesn't exist, create a new expenses with this data.
     */
    create: XOR<expensesCreateInput, expensesUncheckedCreateInput>
    /**
     * In case the expenses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<expensesUpdateInput, expensesUncheckedUpdateInput>
  }

  /**
   * expenses delete
   */
  export type expensesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter which expenses to delete.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses deleteMany
   */
  export type expensesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expenses to delete
     */
    where?: expensesWhereInput
    /**
     * Limit how many expenses to delete.
     */
    limit?: number
  }

  /**
   * expenses.users
   */
  export type expenses$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * expenses without action
   */
  export type expensesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
  }


  /**
   * Model menu_categories
   */

  export type AggregateMenu_categories = {
    _count: Menu_categoriesCountAggregateOutputType | null
    _avg: Menu_categoriesAvgAggregateOutputType | null
    _sum: Menu_categoriesSumAggregateOutputType | null
    _min: Menu_categoriesMinAggregateOutputType | null
    _max: Menu_categoriesMaxAggregateOutputType | null
  }

  export type Menu_categoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type Menu_categoriesSumAggregateOutputType = {
    id: number | null
  }

  export type Menu_categoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
  }

  export type Menu_categoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
  }

  export type Menu_categoriesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    _all: number
  }


  export type Menu_categoriesAvgAggregateInputType = {
    id?: true
  }

  export type Menu_categoriesSumAggregateInputType = {
    id?: true
  }

  export type Menu_categoriesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
  }

  export type Menu_categoriesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
  }

  export type Menu_categoriesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    _all?: true
  }

  export type Menu_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu_categories to aggregate.
     */
    where?: menu_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_categories to fetch.
     */
    orderBy?: menu_categoriesOrderByWithRelationInput | menu_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menu_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menu_categories
    **/
    _count?: true | Menu_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Menu_categoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Menu_categoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Menu_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Menu_categoriesMaxAggregateInputType
  }

  export type GetMenu_categoriesAggregateType<T extends Menu_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu_categories[P]>
      : GetScalarType<T[P], AggregateMenu_categories[P]>
  }




  export type menu_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menu_categoriesWhereInput
    orderBy?: menu_categoriesOrderByWithAggregationInput | menu_categoriesOrderByWithAggregationInput[]
    by: Menu_categoriesScalarFieldEnum[] | Menu_categoriesScalarFieldEnum
    having?: menu_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Menu_categoriesCountAggregateInputType | true
    _avg?: Menu_categoriesAvgAggregateInputType
    _sum?: Menu_categoriesSumAggregateInputType
    _min?: Menu_categoriesMinAggregateInputType
    _max?: Menu_categoriesMaxAggregateInputType
  }

  export type Menu_categoriesGroupByOutputType = {
    id: number
    name: string
    description: string | null
    created_at: Date | null
    _count: Menu_categoriesCountAggregateOutputType | null
    _avg: Menu_categoriesAvgAggregateOutputType | null
    _sum: Menu_categoriesSumAggregateOutputType | null
    _min: Menu_categoriesMinAggregateOutputType | null
    _max: Menu_categoriesMaxAggregateOutputType | null
  }

  type GetMenu_categoriesGroupByPayload<T extends menu_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Menu_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Menu_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Menu_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Menu_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type menu_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    menu_items?: boolean | menu_categories$menu_itemsArgs<ExtArgs>
    _count?: boolean | Menu_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu_categories"]>

  export type menu_categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["menu_categories"]>

  export type menu_categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["menu_categories"]>

  export type menu_categoriesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
  }

  export type menu_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at", ExtArgs["result"]["menu_categories"]>
  export type menu_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu_items?: boolean | menu_categories$menu_itemsArgs<ExtArgs>
    _count?: boolean | Menu_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type menu_categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type menu_categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $menu_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "menu_categories"
    objects: {
      menu_items: Prisma.$menu_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      created_at: Date | null
    }, ExtArgs["result"]["menu_categories"]>
    composites: {}
  }

  type menu_categoriesGetPayload<S extends boolean | null | undefined | menu_categoriesDefaultArgs> = $Result.GetResult<Prisma.$menu_categoriesPayload, S>

  type menu_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<menu_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Menu_categoriesCountAggregateInputType | true
    }

  export interface menu_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['menu_categories'], meta: { name: 'menu_categories' } }
    /**
     * Find zero or one Menu_categories that matches the filter.
     * @param {menu_categoriesFindUniqueArgs} args - Arguments to find a Menu_categories
     * @example
     * // Get one Menu_categories
     * const menu_categories = await prisma.menu_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends menu_categoriesFindUniqueArgs>(args: SelectSubset<T, menu_categoriesFindUniqueArgs<ExtArgs>>): Prisma__menu_categoriesClient<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {menu_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Menu_categories
     * @example
     * // Get one Menu_categories
     * const menu_categories = await prisma.menu_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends menu_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, menu_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__menu_categoriesClient<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_categoriesFindFirstArgs} args - Arguments to find a Menu_categories
     * @example
     * // Get one Menu_categories
     * const menu_categories = await prisma.menu_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends menu_categoriesFindFirstArgs>(args?: SelectSubset<T, menu_categoriesFindFirstArgs<ExtArgs>>): Prisma__menu_categoriesClient<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_categoriesFindFirstOrThrowArgs} args - Arguments to find a Menu_categories
     * @example
     * // Get one Menu_categories
     * const menu_categories = await prisma.menu_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends menu_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, menu_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__menu_categoriesClient<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menu_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menu_categories
     * const menu_categories = await prisma.menu_categories.findMany()
     * 
     * // Get first 10 Menu_categories
     * const menu_categories = await prisma.menu_categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menu_categoriesWithIdOnly = await prisma.menu_categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends menu_categoriesFindManyArgs>(args?: SelectSubset<T, menu_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu_categories.
     * @param {menu_categoriesCreateArgs} args - Arguments to create a Menu_categories.
     * @example
     * // Create one Menu_categories
     * const Menu_categories = await prisma.menu_categories.create({
     *   data: {
     *     // ... data to create a Menu_categories
     *   }
     * })
     * 
     */
    create<T extends menu_categoriesCreateArgs>(args: SelectSubset<T, menu_categoriesCreateArgs<ExtArgs>>): Prisma__menu_categoriesClient<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menu_categories.
     * @param {menu_categoriesCreateManyArgs} args - Arguments to create many Menu_categories.
     * @example
     * // Create many Menu_categories
     * const menu_categories = await prisma.menu_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends menu_categoriesCreateManyArgs>(args?: SelectSubset<T, menu_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Menu_categories and returns the data saved in the database.
     * @param {menu_categoriesCreateManyAndReturnArgs} args - Arguments to create many Menu_categories.
     * @example
     * // Create many Menu_categories
     * const menu_categories = await prisma.menu_categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Menu_categories and only return the `id`
     * const menu_categoriesWithIdOnly = await prisma.menu_categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends menu_categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, menu_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Menu_categories.
     * @param {menu_categoriesDeleteArgs} args - Arguments to delete one Menu_categories.
     * @example
     * // Delete one Menu_categories
     * const Menu_categories = await prisma.menu_categories.delete({
     *   where: {
     *     // ... filter to delete one Menu_categories
     *   }
     * })
     * 
     */
    delete<T extends menu_categoriesDeleteArgs>(args: SelectSubset<T, menu_categoriesDeleteArgs<ExtArgs>>): Prisma__menu_categoriesClient<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu_categories.
     * @param {menu_categoriesUpdateArgs} args - Arguments to update one Menu_categories.
     * @example
     * // Update one Menu_categories
     * const menu_categories = await prisma.menu_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends menu_categoriesUpdateArgs>(args: SelectSubset<T, menu_categoriesUpdateArgs<ExtArgs>>): Prisma__menu_categoriesClient<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menu_categories.
     * @param {menu_categoriesDeleteManyArgs} args - Arguments to filter Menu_categories to delete.
     * @example
     * // Delete a few Menu_categories
     * const { count } = await prisma.menu_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends menu_categoriesDeleteManyArgs>(args?: SelectSubset<T, menu_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menu_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menu_categories
     * const menu_categories = await prisma.menu_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends menu_categoriesUpdateManyArgs>(args: SelectSubset<T, menu_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menu_categories and returns the data updated in the database.
     * @param {menu_categoriesUpdateManyAndReturnArgs} args - Arguments to update many Menu_categories.
     * @example
     * // Update many Menu_categories
     * const menu_categories = await prisma.menu_categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Menu_categories and only return the `id`
     * const menu_categoriesWithIdOnly = await prisma.menu_categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends menu_categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, menu_categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Menu_categories.
     * @param {menu_categoriesUpsertArgs} args - Arguments to update or create a Menu_categories.
     * @example
     * // Update or create a Menu_categories
     * const menu_categories = await prisma.menu_categories.upsert({
     *   create: {
     *     // ... data to create a Menu_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu_categories we want to update
     *   }
     * })
     */
    upsert<T extends menu_categoriesUpsertArgs>(args: SelectSubset<T, menu_categoriesUpsertArgs<ExtArgs>>): Prisma__menu_categoriesClient<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menu_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_categoriesCountArgs} args - Arguments to filter Menu_categories to count.
     * @example
     * // Count the number of Menu_categories
     * const count = await prisma.menu_categories.count({
     *   where: {
     *     // ... the filter for the Menu_categories we want to count
     *   }
     * })
    **/
    count<T extends menu_categoriesCountArgs>(
      args?: Subset<T, menu_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Menu_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Menu_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Menu_categoriesAggregateArgs>(args: Subset<T, Menu_categoriesAggregateArgs>): Prisma.PrismaPromise<GetMenu_categoriesAggregateType<T>>

    /**
     * Group by Menu_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends menu_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: menu_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: menu_categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, menu_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenu_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the menu_categories model
   */
  readonly fields: menu_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for menu_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__menu_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu_items<T extends menu_categories$menu_itemsArgs<ExtArgs> = {}>(args?: Subset<T, menu_categories$menu_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the menu_categories model
   */
  interface menu_categoriesFieldRefs {
    readonly id: FieldRef<"menu_categories", 'Int'>
    readonly name: FieldRef<"menu_categories", 'String'>
    readonly description: FieldRef<"menu_categories", 'String'>
    readonly created_at: FieldRef<"menu_categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * menu_categories findUnique
   */
  export type menu_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which menu_categories to fetch.
     */
    where: menu_categoriesWhereUniqueInput
  }

  /**
   * menu_categories findUniqueOrThrow
   */
  export type menu_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which menu_categories to fetch.
     */
    where: menu_categoriesWhereUniqueInput
  }

  /**
   * menu_categories findFirst
   */
  export type menu_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which menu_categories to fetch.
     */
    where?: menu_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_categories to fetch.
     */
    orderBy?: menu_categoriesOrderByWithRelationInput | menu_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_categories.
     */
    cursor?: menu_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_categories.
     */
    distinct?: Menu_categoriesScalarFieldEnum | Menu_categoriesScalarFieldEnum[]
  }

  /**
   * menu_categories findFirstOrThrow
   */
  export type menu_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which menu_categories to fetch.
     */
    where?: menu_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_categories to fetch.
     */
    orderBy?: menu_categoriesOrderByWithRelationInput | menu_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_categories.
     */
    cursor?: menu_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_categories.
     */
    distinct?: Menu_categoriesScalarFieldEnum | Menu_categoriesScalarFieldEnum[]
  }

  /**
   * menu_categories findMany
   */
  export type menu_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which menu_categories to fetch.
     */
    where?: menu_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_categories to fetch.
     */
    orderBy?: menu_categoriesOrderByWithRelationInput | menu_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menu_categories.
     */
    cursor?: menu_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_categories.
     */
    skip?: number
    distinct?: Menu_categoriesScalarFieldEnum | Menu_categoriesScalarFieldEnum[]
  }

  /**
   * menu_categories create
   */
  export type menu_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a menu_categories.
     */
    data: XOR<menu_categoriesCreateInput, menu_categoriesUncheckedCreateInput>
  }

  /**
   * menu_categories createMany
   */
  export type menu_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many menu_categories.
     */
    data: menu_categoriesCreateManyInput | menu_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menu_categories createManyAndReturn
   */
  export type menu_categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many menu_categories.
     */
    data: menu_categoriesCreateManyInput | menu_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menu_categories update
   */
  export type menu_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a menu_categories.
     */
    data: XOR<menu_categoriesUpdateInput, menu_categoriesUncheckedUpdateInput>
    /**
     * Choose, which menu_categories to update.
     */
    where: menu_categoriesWhereUniqueInput
  }

  /**
   * menu_categories updateMany
   */
  export type menu_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update menu_categories.
     */
    data: XOR<menu_categoriesUpdateManyMutationInput, menu_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which menu_categories to update
     */
    where?: menu_categoriesWhereInput
    /**
     * Limit how many menu_categories to update.
     */
    limit?: number
  }

  /**
   * menu_categories updateManyAndReturn
   */
  export type menu_categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * The data used to update menu_categories.
     */
    data: XOR<menu_categoriesUpdateManyMutationInput, menu_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which menu_categories to update
     */
    where?: menu_categoriesWhereInput
    /**
     * Limit how many menu_categories to update.
     */
    limit?: number
  }

  /**
   * menu_categories upsert
   */
  export type menu_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the menu_categories to update in case it exists.
     */
    where: menu_categoriesWhereUniqueInput
    /**
     * In case the menu_categories found by the `where` argument doesn't exist, create a new menu_categories with this data.
     */
    create: XOR<menu_categoriesCreateInput, menu_categoriesUncheckedCreateInput>
    /**
     * In case the menu_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menu_categoriesUpdateInput, menu_categoriesUncheckedUpdateInput>
  }

  /**
   * menu_categories delete
   */
  export type menu_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    /**
     * Filter which menu_categories to delete.
     */
    where: menu_categoriesWhereUniqueInput
  }

  /**
   * menu_categories deleteMany
   */
  export type menu_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu_categories to delete
     */
    where?: menu_categoriesWhereInput
    /**
     * Limit how many menu_categories to delete.
     */
    limit?: number
  }

  /**
   * menu_categories.menu_items
   */
  export type menu_categories$menu_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
    where?: menu_itemsWhereInput
    orderBy?: menu_itemsOrderByWithRelationInput | menu_itemsOrderByWithRelationInput[]
    cursor?: menu_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Menu_itemsScalarFieldEnum | Menu_itemsScalarFieldEnum[]
  }

  /**
   * menu_categories without action
   */
  export type menu_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
  }


  /**
   * Model menu_items
   */

  export type AggregateMenu_items = {
    _count: Menu_itemsCountAggregateOutputType | null
    _avg: Menu_itemsAvgAggregateOutputType | null
    _sum: Menu_itemsSumAggregateOutputType | null
    _min: Menu_itemsMinAggregateOutputType | null
    _max: Menu_itemsMaxAggregateOutputType | null
  }

  export type Menu_itemsAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
    price: Decimal | null
  }

  export type Menu_itemsSumAggregateOutputType = {
    id: number | null
    category_id: number | null
    price: Decimal | null
  }

  export type Menu_itemsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category_id: number | null
    price: Decimal | null
    is_available: boolean | null
    created_at: Date | null
    image_url: string | null
  }

  export type Menu_itemsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category_id: number | null
    price: Decimal | null
    is_available: boolean | null
    created_at: Date | null
    image_url: string | null
  }

  export type Menu_itemsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category_id: number
    price: number
    is_available: number
    created_at: number
    image_url: number
    _all: number
  }


  export type Menu_itemsAvgAggregateInputType = {
    id?: true
    category_id?: true
    price?: true
  }

  export type Menu_itemsSumAggregateInputType = {
    id?: true
    category_id?: true
    price?: true
  }

  export type Menu_itemsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category_id?: true
    price?: true
    is_available?: true
    created_at?: true
    image_url?: true
  }

  export type Menu_itemsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category_id?: true
    price?: true
    is_available?: true
    created_at?: true
    image_url?: true
  }

  export type Menu_itemsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category_id?: true
    price?: true
    is_available?: true
    created_at?: true
    image_url?: true
    _all?: true
  }

  export type Menu_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu_items to aggregate.
     */
    where?: menu_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_items to fetch.
     */
    orderBy?: menu_itemsOrderByWithRelationInput | menu_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menu_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menu_items
    **/
    _count?: true | Menu_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Menu_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Menu_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Menu_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Menu_itemsMaxAggregateInputType
  }

  export type GetMenu_itemsAggregateType<T extends Menu_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu_items[P]>
      : GetScalarType<T[P], AggregateMenu_items[P]>
  }




  export type menu_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menu_itemsWhereInput
    orderBy?: menu_itemsOrderByWithAggregationInput | menu_itemsOrderByWithAggregationInput[]
    by: Menu_itemsScalarFieldEnum[] | Menu_itemsScalarFieldEnum
    having?: menu_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Menu_itemsCountAggregateInputType | true
    _avg?: Menu_itemsAvgAggregateInputType
    _sum?: Menu_itemsSumAggregateInputType
    _min?: Menu_itemsMinAggregateInputType
    _max?: Menu_itemsMaxAggregateInputType
  }

  export type Menu_itemsGroupByOutputType = {
    id: number
    name: string
    description: string | null
    category_id: number | null
    price: Decimal
    is_available: boolean | null
    created_at: Date | null
    image_url: string | null
    _count: Menu_itemsCountAggregateOutputType | null
    _avg: Menu_itemsAvgAggregateOutputType | null
    _sum: Menu_itemsSumAggregateOutputType | null
    _min: Menu_itemsMinAggregateOutputType | null
    _max: Menu_itemsMaxAggregateOutputType | null
  }

  type GetMenu_itemsGroupByPayload<T extends menu_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Menu_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Menu_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Menu_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Menu_itemsGroupByOutputType[P]>
        }
      >
    >


  export type menu_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category_id?: boolean
    price?: boolean
    is_available?: boolean
    created_at?: boolean
    image_url?: boolean
    menu_categories?: boolean | menu_items$menu_categoriesArgs<ExtArgs>
    order_lines?: boolean | menu_items$order_linesArgs<ExtArgs>
    recipe_items?: boolean | menu_items$recipe_itemsArgs<ExtArgs>
    _count?: boolean | Menu_itemsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu_items"]>

  export type menu_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category_id?: boolean
    price?: boolean
    is_available?: boolean
    created_at?: boolean
    image_url?: boolean
    menu_categories?: boolean | menu_items$menu_categoriesArgs<ExtArgs>
  }, ExtArgs["result"]["menu_items"]>

  export type menu_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category_id?: boolean
    price?: boolean
    is_available?: boolean
    created_at?: boolean
    image_url?: boolean
    menu_categories?: boolean | menu_items$menu_categoriesArgs<ExtArgs>
  }, ExtArgs["result"]["menu_items"]>

  export type menu_itemsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category_id?: boolean
    price?: boolean
    is_available?: boolean
    created_at?: boolean
    image_url?: boolean
  }

  export type menu_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "category_id" | "price" | "is_available" | "created_at" | "image_url", ExtArgs["result"]["menu_items"]>
  export type menu_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu_categories?: boolean | menu_items$menu_categoriesArgs<ExtArgs>
    order_lines?: boolean | menu_items$order_linesArgs<ExtArgs>
    recipe_items?: boolean | menu_items$recipe_itemsArgs<ExtArgs>
    _count?: boolean | Menu_itemsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type menu_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu_categories?: boolean | menu_items$menu_categoriesArgs<ExtArgs>
  }
  export type menu_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu_categories?: boolean | menu_items$menu_categoriesArgs<ExtArgs>
  }

  export type $menu_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "menu_items"
    objects: {
      menu_categories: Prisma.$menu_categoriesPayload<ExtArgs> | null
      order_lines: Prisma.$order_linesPayload<ExtArgs>[]
      recipe_items: Prisma.$recipe_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      category_id: number | null
      price: Prisma.Decimal
      is_available: boolean | null
      created_at: Date | null
      image_url: string | null
    }, ExtArgs["result"]["menu_items"]>
    composites: {}
  }

  type menu_itemsGetPayload<S extends boolean | null | undefined | menu_itemsDefaultArgs> = $Result.GetResult<Prisma.$menu_itemsPayload, S>

  type menu_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<menu_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Menu_itemsCountAggregateInputType | true
    }

  export interface menu_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['menu_items'], meta: { name: 'menu_items' } }
    /**
     * Find zero or one Menu_items that matches the filter.
     * @param {menu_itemsFindUniqueArgs} args - Arguments to find a Menu_items
     * @example
     * // Get one Menu_items
     * const menu_items = await prisma.menu_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends menu_itemsFindUniqueArgs>(args: SelectSubset<T, menu_itemsFindUniqueArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {menu_itemsFindUniqueOrThrowArgs} args - Arguments to find a Menu_items
     * @example
     * // Get one Menu_items
     * const menu_items = await prisma.menu_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends menu_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, menu_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_itemsFindFirstArgs} args - Arguments to find a Menu_items
     * @example
     * // Get one Menu_items
     * const menu_items = await prisma.menu_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends menu_itemsFindFirstArgs>(args?: SelectSubset<T, menu_itemsFindFirstArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_itemsFindFirstOrThrowArgs} args - Arguments to find a Menu_items
     * @example
     * // Get one Menu_items
     * const menu_items = await prisma.menu_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends menu_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, menu_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menu_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menu_items
     * const menu_items = await prisma.menu_items.findMany()
     * 
     * // Get first 10 Menu_items
     * const menu_items = await prisma.menu_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menu_itemsWithIdOnly = await prisma.menu_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends menu_itemsFindManyArgs>(args?: SelectSubset<T, menu_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu_items.
     * @param {menu_itemsCreateArgs} args - Arguments to create a Menu_items.
     * @example
     * // Create one Menu_items
     * const Menu_items = await prisma.menu_items.create({
     *   data: {
     *     // ... data to create a Menu_items
     *   }
     * })
     * 
     */
    create<T extends menu_itemsCreateArgs>(args: SelectSubset<T, menu_itemsCreateArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menu_items.
     * @param {menu_itemsCreateManyArgs} args - Arguments to create many Menu_items.
     * @example
     * // Create many Menu_items
     * const menu_items = await prisma.menu_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends menu_itemsCreateManyArgs>(args?: SelectSubset<T, menu_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Menu_items and returns the data saved in the database.
     * @param {menu_itemsCreateManyAndReturnArgs} args - Arguments to create many Menu_items.
     * @example
     * // Create many Menu_items
     * const menu_items = await prisma.menu_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Menu_items and only return the `id`
     * const menu_itemsWithIdOnly = await prisma.menu_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends menu_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, menu_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Menu_items.
     * @param {menu_itemsDeleteArgs} args - Arguments to delete one Menu_items.
     * @example
     * // Delete one Menu_items
     * const Menu_items = await prisma.menu_items.delete({
     *   where: {
     *     // ... filter to delete one Menu_items
     *   }
     * })
     * 
     */
    delete<T extends menu_itemsDeleteArgs>(args: SelectSubset<T, menu_itemsDeleteArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu_items.
     * @param {menu_itemsUpdateArgs} args - Arguments to update one Menu_items.
     * @example
     * // Update one Menu_items
     * const menu_items = await prisma.menu_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends menu_itemsUpdateArgs>(args: SelectSubset<T, menu_itemsUpdateArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menu_items.
     * @param {menu_itemsDeleteManyArgs} args - Arguments to filter Menu_items to delete.
     * @example
     * // Delete a few Menu_items
     * const { count } = await prisma.menu_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends menu_itemsDeleteManyArgs>(args?: SelectSubset<T, menu_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menu_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menu_items
     * const menu_items = await prisma.menu_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends menu_itemsUpdateManyArgs>(args: SelectSubset<T, menu_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menu_items and returns the data updated in the database.
     * @param {menu_itemsUpdateManyAndReturnArgs} args - Arguments to update many Menu_items.
     * @example
     * // Update many Menu_items
     * const menu_items = await prisma.menu_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Menu_items and only return the `id`
     * const menu_itemsWithIdOnly = await prisma.menu_items.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends menu_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, menu_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Menu_items.
     * @param {menu_itemsUpsertArgs} args - Arguments to update or create a Menu_items.
     * @example
     * // Update or create a Menu_items
     * const menu_items = await prisma.menu_items.upsert({
     *   create: {
     *     // ... data to create a Menu_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu_items we want to update
     *   }
     * })
     */
    upsert<T extends menu_itemsUpsertArgs>(args: SelectSubset<T, menu_itemsUpsertArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menu_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_itemsCountArgs} args - Arguments to filter Menu_items to count.
     * @example
     * // Count the number of Menu_items
     * const count = await prisma.menu_items.count({
     *   where: {
     *     // ... the filter for the Menu_items we want to count
     *   }
     * })
    **/
    count<T extends menu_itemsCountArgs>(
      args?: Subset<T, menu_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Menu_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Menu_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Menu_itemsAggregateArgs>(args: Subset<T, Menu_itemsAggregateArgs>): Prisma.PrismaPromise<GetMenu_itemsAggregateType<T>>

    /**
     * Group by Menu_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends menu_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: menu_itemsGroupByArgs['orderBy'] }
        : { orderBy?: menu_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, menu_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenu_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the menu_items model
   */
  readonly fields: menu_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for menu_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__menu_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu_categories<T extends menu_items$menu_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, menu_items$menu_categoriesArgs<ExtArgs>>): Prisma__menu_categoriesClient<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    order_lines<T extends menu_items$order_linesArgs<ExtArgs> = {}>(args?: Subset<T, menu_items$order_linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recipe_items<T extends menu_items$recipe_itemsArgs<ExtArgs> = {}>(args?: Subset<T, menu_items$recipe_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipe_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the menu_items model
   */
  interface menu_itemsFieldRefs {
    readonly id: FieldRef<"menu_items", 'Int'>
    readonly name: FieldRef<"menu_items", 'String'>
    readonly description: FieldRef<"menu_items", 'String'>
    readonly category_id: FieldRef<"menu_items", 'Int'>
    readonly price: FieldRef<"menu_items", 'Decimal'>
    readonly is_available: FieldRef<"menu_items", 'Boolean'>
    readonly created_at: FieldRef<"menu_items", 'DateTime'>
    readonly image_url: FieldRef<"menu_items", 'String'>
  }
    

  // Custom InputTypes
  /**
   * menu_items findUnique
   */
  export type menu_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
    /**
     * Filter, which menu_items to fetch.
     */
    where: menu_itemsWhereUniqueInput
  }

  /**
   * menu_items findUniqueOrThrow
   */
  export type menu_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
    /**
     * Filter, which menu_items to fetch.
     */
    where: menu_itemsWhereUniqueInput
  }

  /**
   * menu_items findFirst
   */
  export type menu_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
    /**
     * Filter, which menu_items to fetch.
     */
    where?: menu_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_items to fetch.
     */
    orderBy?: menu_itemsOrderByWithRelationInput | menu_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_items.
     */
    cursor?: menu_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_items.
     */
    distinct?: Menu_itemsScalarFieldEnum | Menu_itemsScalarFieldEnum[]
  }

  /**
   * menu_items findFirstOrThrow
   */
  export type menu_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
    /**
     * Filter, which menu_items to fetch.
     */
    where?: menu_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_items to fetch.
     */
    orderBy?: menu_itemsOrderByWithRelationInput | menu_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_items.
     */
    cursor?: menu_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_items.
     */
    distinct?: Menu_itemsScalarFieldEnum | Menu_itemsScalarFieldEnum[]
  }

  /**
   * menu_items findMany
   */
  export type menu_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
    /**
     * Filter, which menu_items to fetch.
     */
    where?: menu_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_items to fetch.
     */
    orderBy?: menu_itemsOrderByWithRelationInput | menu_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menu_items.
     */
    cursor?: menu_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_items.
     */
    skip?: number
    distinct?: Menu_itemsScalarFieldEnum | Menu_itemsScalarFieldEnum[]
  }

  /**
   * menu_items create
   */
  export type menu_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a menu_items.
     */
    data: XOR<menu_itemsCreateInput, menu_itemsUncheckedCreateInput>
  }

  /**
   * menu_items createMany
   */
  export type menu_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many menu_items.
     */
    data: menu_itemsCreateManyInput | menu_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menu_items createManyAndReturn
   */
  export type menu_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many menu_items.
     */
    data: menu_itemsCreateManyInput | menu_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * menu_items update
   */
  export type menu_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a menu_items.
     */
    data: XOR<menu_itemsUpdateInput, menu_itemsUncheckedUpdateInput>
    /**
     * Choose, which menu_items to update.
     */
    where: menu_itemsWhereUniqueInput
  }

  /**
   * menu_items updateMany
   */
  export type menu_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update menu_items.
     */
    data: XOR<menu_itemsUpdateManyMutationInput, menu_itemsUncheckedUpdateManyInput>
    /**
     * Filter which menu_items to update
     */
    where?: menu_itemsWhereInput
    /**
     * Limit how many menu_items to update.
     */
    limit?: number
  }

  /**
   * menu_items updateManyAndReturn
   */
  export type menu_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * The data used to update menu_items.
     */
    data: XOR<menu_itemsUpdateManyMutationInput, menu_itemsUncheckedUpdateManyInput>
    /**
     * Filter which menu_items to update
     */
    where?: menu_itemsWhereInput
    /**
     * Limit how many menu_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * menu_items upsert
   */
  export type menu_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the menu_items to update in case it exists.
     */
    where: menu_itemsWhereUniqueInput
    /**
     * In case the menu_items found by the `where` argument doesn't exist, create a new menu_items with this data.
     */
    create: XOR<menu_itemsCreateInput, menu_itemsUncheckedCreateInput>
    /**
     * In case the menu_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menu_itemsUpdateInput, menu_itemsUncheckedUpdateInput>
  }

  /**
   * menu_items delete
   */
  export type menu_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
    /**
     * Filter which menu_items to delete.
     */
    where: menu_itemsWhereUniqueInput
  }

  /**
   * menu_items deleteMany
   */
  export type menu_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu_items to delete
     */
    where?: menu_itemsWhereInput
    /**
     * Limit how many menu_items to delete.
     */
    limit?: number
  }

  /**
   * menu_items.menu_categories
   */
  export type menu_items$menu_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    where?: menu_categoriesWhereInput
  }

  /**
   * menu_items.order_lines
   */
  export type menu_items$order_linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    where?: order_linesWhereInput
    orderBy?: order_linesOrderByWithRelationInput | order_linesOrderByWithRelationInput[]
    cursor?: order_linesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_linesScalarFieldEnum | Order_linesScalarFieldEnum[]
  }

  /**
   * menu_items.recipe_items
   */
  export type menu_items$recipe_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_items
     */
    select?: recipe_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_items
     */
    omit?: recipe_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_itemsInclude<ExtArgs> | null
    where?: recipe_itemsWhereInput
    orderBy?: recipe_itemsOrderByWithRelationInput | recipe_itemsOrderByWithRelationInput[]
    cursor?: recipe_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recipe_itemsScalarFieldEnum | Recipe_itemsScalarFieldEnum[]
  }

  /**
   * menu_items without action
   */
  export type menu_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
  }


  /**
   * Model order_lines
   */

  export type AggregateOrder_lines = {
    _count: Order_linesCountAggregateOutputType | null
    _avg: Order_linesAvgAggregateOutputType | null
    _sum: Order_linesSumAggregateOutputType | null
    _min: Order_linesMinAggregateOutputType | null
    _max: Order_linesMaxAggregateOutputType | null
  }

  export type Order_linesAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
    menu_item_id: number | null
    quantity: number | null
    price_at_sale: Decimal | null
    line_total: Decimal | null
  }

  export type Order_linesSumAggregateOutputType = {
    id: number | null
    order_id: number | null
    menu_item_id: number | null
    quantity: number | null
    price_at_sale: Decimal | null
    line_total: Decimal | null
  }

  export type Order_linesMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    menu_item_id: number | null
    quantity: number | null
    price_at_sale: Decimal | null
    line_total: Decimal | null
    created_at: Date | null
  }

  export type Order_linesMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    menu_item_id: number | null
    quantity: number | null
    price_at_sale: Decimal | null
    line_total: Decimal | null
    created_at: Date | null
  }

  export type Order_linesCountAggregateOutputType = {
    id: number
    order_id: number
    menu_item_id: number
    quantity: number
    price_at_sale: number
    line_total: number
    created_at: number
    _all: number
  }


  export type Order_linesAvgAggregateInputType = {
    id?: true
    order_id?: true
    menu_item_id?: true
    quantity?: true
    price_at_sale?: true
    line_total?: true
  }

  export type Order_linesSumAggregateInputType = {
    id?: true
    order_id?: true
    menu_item_id?: true
    quantity?: true
    price_at_sale?: true
    line_total?: true
  }

  export type Order_linesMinAggregateInputType = {
    id?: true
    order_id?: true
    menu_item_id?: true
    quantity?: true
    price_at_sale?: true
    line_total?: true
    created_at?: true
  }

  export type Order_linesMaxAggregateInputType = {
    id?: true
    order_id?: true
    menu_item_id?: true
    quantity?: true
    price_at_sale?: true
    line_total?: true
    created_at?: true
  }

  export type Order_linesCountAggregateInputType = {
    id?: true
    order_id?: true
    menu_item_id?: true
    quantity?: true
    price_at_sale?: true
    line_total?: true
    created_at?: true
    _all?: true
  }

  export type Order_linesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_lines to aggregate.
     */
    where?: order_linesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_lines to fetch.
     */
    orderBy?: order_linesOrderByWithRelationInput | order_linesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_linesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_lines
    **/
    _count?: true | Order_linesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_linesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_linesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_linesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_linesMaxAggregateInputType
  }

  export type GetOrder_linesAggregateType<T extends Order_linesAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_lines]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_lines[P]>
      : GetScalarType<T[P], AggregateOrder_lines[P]>
  }




  export type order_linesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_linesWhereInput
    orderBy?: order_linesOrderByWithAggregationInput | order_linesOrderByWithAggregationInput[]
    by: Order_linesScalarFieldEnum[] | Order_linesScalarFieldEnum
    having?: order_linesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_linesCountAggregateInputType | true
    _avg?: Order_linesAvgAggregateInputType
    _sum?: Order_linesSumAggregateInputType
    _min?: Order_linesMinAggregateInputType
    _max?: Order_linesMaxAggregateInputType
  }

  export type Order_linesGroupByOutputType = {
    id: number
    order_id: number
    menu_item_id: number
    quantity: number
    price_at_sale: Decimal
    line_total: Decimal
    created_at: Date | null
    _count: Order_linesCountAggregateOutputType | null
    _avg: Order_linesAvgAggregateOutputType | null
    _sum: Order_linesSumAggregateOutputType | null
    _min: Order_linesMinAggregateOutputType | null
    _max: Order_linesMaxAggregateOutputType | null
  }

  type GetOrder_linesGroupByPayload<T extends order_linesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_linesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_linesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_linesGroupByOutputType[P]>
            : GetScalarType<T[P], Order_linesGroupByOutputType[P]>
        }
      >
    >


  export type order_linesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    menu_item_id?: boolean
    quantity?: boolean
    price_at_sale?: boolean
    line_total?: boolean
    created_at?: boolean
    menu_items?: boolean | menu_itemsDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_lines"]>

  export type order_linesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    menu_item_id?: boolean
    quantity?: boolean
    price_at_sale?: boolean
    line_total?: boolean
    created_at?: boolean
    menu_items?: boolean | menu_itemsDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_lines"]>

  export type order_linesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    menu_item_id?: boolean
    quantity?: boolean
    price_at_sale?: boolean
    line_total?: boolean
    created_at?: boolean
    menu_items?: boolean | menu_itemsDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_lines"]>

  export type order_linesSelectScalar = {
    id?: boolean
    order_id?: boolean
    menu_item_id?: boolean
    quantity?: boolean
    price_at_sale?: boolean
    line_total?: boolean
    created_at?: boolean
  }

  export type order_linesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "menu_item_id" | "quantity" | "price_at_sale" | "line_total" | "created_at", ExtArgs["result"]["order_lines"]>
  export type order_linesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu_items?: boolean | menu_itemsDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }
  export type order_linesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu_items?: boolean | menu_itemsDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }
  export type order_linesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu_items?: boolean | menu_itemsDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }

  export type $order_linesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_lines"
    objects: {
      menu_items: Prisma.$menu_itemsPayload<ExtArgs>
      orders: Prisma.$ordersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number
      menu_item_id: number
      quantity: number
      price_at_sale: Prisma.Decimal
      line_total: Prisma.Decimal
      created_at: Date | null
    }, ExtArgs["result"]["order_lines"]>
    composites: {}
  }

  type order_linesGetPayload<S extends boolean | null | undefined | order_linesDefaultArgs> = $Result.GetResult<Prisma.$order_linesPayload, S>

  type order_linesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_linesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_linesCountAggregateInputType | true
    }

  export interface order_linesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_lines'], meta: { name: 'order_lines' } }
    /**
     * Find zero or one Order_lines that matches the filter.
     * @param {order_linesFindUniqueArgs} args - Arguments to find a Order_lines
     * @example
     * // Get one Order_lines
     * const order_lines = await prisma.order_lines.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_linesFindUniqueArgs>(args: SelectSubset<T, order_linesFindUniqueArgs<ExtArgs>>): Prisma__order_linesClient<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_lines that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_linesFindUniqueOrThrowArgs} args - Arguments to find a Order_lines
     * @example
     * // Get one Order_lines
     * const order_lines = await prisma.order_lines.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_linesFindUniqueOrThrowArgs>(args: SelectSubset<T, order_linesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_linesClient<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_lines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_linesFindFirstArgs} args - Arguments to find a Order_lines
     * @example
     * // Get one Order_lines
     * const order_lines = await prisma.order_lines.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_linesFindFirstArgs>(args?: SelectSubset<T, order_linesFindFirstArgs<ExtArgs>>): Prisma__order_linesClient<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_lines that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_linesFindFirstOrThrowArgs} args - Arguments to find a Order_lines
     * @example
     * // Get one Order_lines
     * const order_lines = await prisma.order_lines.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_linesFindFirstOrThrowArgs>(args?: SelectSubset<T, order_linesFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_linesClient<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_lines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_linesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_lines
     * const order_lines = await prisma.order_lines.findMany()
     * 
     * // Get first 10 Order_lines
     * const order_lines = await prisma.order_lines.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_linesWithIdOnly = await prisma.order_lines.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_linesFindManyArgs>(args?: SelectSubset<T, order_linesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_lines.
     * @param {order_linesCreateArgs} args - Arguments to create a Order_lines.
     * @example
     * // Create one Order_lines
     * const Order_lines = await prisma.order_lines.create({
     *   data: {
     *     // ... data to create a Order_lines
     *   }
     * })
     * 
     */
    create<T extends order_linesCreateArgs>(args: SelectSubset<T, order_linesCreateArgs<ExtArgs>>): Prisma__order_linesClient<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_lines.
     * @param {order_linesCreateManyArgs} args - Arguments to create many Order_lines.
     * @example
     * // Create many Order_lines
     * const order_lines = await prisma.order_lines.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_linesCreateManyArgs>(args?: SelectSubset<T, order_linesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_lines and returns the data saved in the database.
     * @param {order_linesCreateManyAndReturnArgs} args - Arguments to create many Order_lines.
     * @example
     * // Create many Order_lines
     * const order_lines = await prisma.order_lines.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_lines and only return the `id`
     * const order_linesWithIdOnly = await prisma.order_lines.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends order_linesCreateManyAndReturnArgs>(args?: SelectSubset<T, order_linesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order_lines.
     * @param {order_linesDeleteArgs} args - Arguments to delete one Order_lines.
     * @example
     * // Delete one Order_lines
     * const Order_lines = await prisma.order_lines.delete({
     *   where: {
     *     // ... filter to delete one Order_lines
     *   }
     * })
     * 
     */
    delete<T extends order_linesDeleteArgs>(args: SelectSubset<T, order_linesDeleteArgs<ExtArgs>>): Prisma__order_linesClient<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_lines.
     * @param {order_linesUpdateArgs} args - Arguments to update one Order_lines.
     * @example
     * // Update one Order_lines
     * const order_lines = await prisma.order_lines.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_linesUpdateArgs>(args: SelectSubset<T, order_linesUpdateArgs<ExtArgs>>): Prisma__order_linesClient<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_lines.
     * @param {order_linesDeleteManyArgs} args - Arguments to filter Order_lines to delete.
     * @example
     * // Delete a few Order_lines
     * const { count } = await prisma.order_lines.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_linesDeleteManyArgs>(args?: SelectSubset<T, order_linesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_linesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_lines
     * const order_lines = await prisma.order_lines.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_linesUpdateManyArgs>(args: SelectSubset<T, order_linesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_lines and returns the data updated in the database.
     * @param {order_linesUpdateManyAndReturnArgs} args - Arguments to update many Order_lines.
     * @example
     * // Update many Order_lines
     * const order_lines = await prisma.order_lines.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Order_lines and only return the `id`
     * const order_linesWithIdOnly = await prisma.order_lines.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends order_linesUpdateManyAndReturnArgs>(args: SelectSubset<T, order_linesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order_lines.
     * @param {order_linesUpsertArgs} args - Arguments to update or create a Order_lines.
     * @example
     * // Update or create a Order_lines
     * const order_lines = await prisma.order_lines.upsert({
     *   create: {
     *     // ... data to create a Order_lines
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_lines we want to update
     *   }
     * })
     */
    upsert<T extends order_linesUpsertArgs>(args: SelectSubset<T, order_linesUpsertArgs<ExtArgs>>): Prisma__order_linesClient<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_linesCountArgs} args - Arguments to filter Order_lines to count.
     * @example
     * // Count the number of Order_lines
     * const count = await prisma.order_lines.count({
     *   where: {
     *     // ... the filter for the Order_lines we want to count
     *   }
     * })
    **/
    count<T extends order_linesCountArgs>(
      args?: Subset<T, order_linesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_linesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_linesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_linesAggregateArgs>(args: Subset<T, Order_linesAggregateArgs>): Prisma.PrismaPromise<GetOrder_linesAggregateType<T>>

    /**
     * Group by Order_lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_linesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends order_linesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_linesGroupByArgs['orderBy'] }
        : { orderBy?: order_linesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, order_linesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_linesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_lines model
   */
  readonly fields: order_linesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_lines.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_linesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu_items<T extends menu_itemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, menu_itemsDefaultArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order_lines model
   */
  interface order_linesFieldRefs {
    readonly id: FieldRef<"order_lines", 'Int'>
    readonly order_id: FieldRef<"order_lines", 'Int'>
    readonly menu_item_id: FieldRef<"order_lines", 'Int'>
    readonly quantity: FieldRef<"order_lines", 'Int'>
    readonly price_at_sale: FieldRef<"order_lines", 'Decimal'>
    readonly line_total: FieldRef<"order_lines", 'Decimal'>
    readonly created_at: FieldRef<"order_lines", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order_lines findUnique
   */
  export type order_linesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    /**
     * Filter, which order_lines to fetch.
     */
    where: order_linesWhereUniqueInput
  }

  /**
   * order_lines findUniqueOrThrow
   */
  export type order_linesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    /**
     * Filter, which order_lines to fetch.
     */
    where: order_linesWhereUniqueInput
  }

  /**
   * order_lines findFirst
   */
  export type order_linesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    /**
     * Filter, which order_lines to fetch.
     */
    where?: order_linesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_lines to fetch.
     */
    orderBy?: order_linesOrderByWithRelationInput | order_linesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_lines.
     */
    cursor?: order_linesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_lines.
     */
    distinct?: Order_linesScalarFieldEnum | Order_linesScalarFieldEnum[]
  }

  /**
   * order_lines findFirstOrThrow
   */
  export type order_linesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    /**
     * Filter, which order_lines to fetch.
     */
    where?: order_linesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_lines to fetch.
     */
    orderBy?: order_linesOrderByWithRelationInput | order_linesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_lines.
     */
    cursor?: order_linesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_lines.
     */
    distinct?: Order_linesScalarFieldEnum | Order_linesScalarFieldEnum[]
  }

  /**
   * order_lines findMany
   */
  export type order_linesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    /**
     * Filter, which order_lines to fetch.
     */
    where?: order_linesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_lines to fetch.
     */
    orderBy?: order_linesOrderByWithRelationInput | order_linesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_lines.
     */
    cursor?: order_linesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_lines.
     */
    skip?: number
    distinct?: Order_linesScalarFieldEnum | Order_linesScalarFieldEnum[]
  }

  /**
   * order_lines create
   */
  export type order_linesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    /**
     * The data needed to create a order_lines.
     */
    data: XOR<order_linesCreateInput, order_linesUncheckedCreateInput>
  }

  /**
   * order_lines createMany
   */
  export type order_linesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_lines.
     */
    data: order_linesCreateManyInput | order_linesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_lines createManyAndReturn
   */
  export type order_linesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * The data used to create many order_lines.
     */
    data: order_linesCreateManyInput | order_linesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_lines update
   */
  export type order_linesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    /**
     * The data needed to update a order_lines.
     */
    data: XOR<order_linesUpdateInput, order_linesUncheckedUpdateInput>
    /**
     * Choose, which order_lines to update.
     */
    where: order_linesWhereUniqueInput
  }

  /**
   * order_lines updateMany
   */
  export type order_linesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_lines.
     */
    data: XOR<order_linesUpdateManyMutationInput, order_linesUncheckedUpdateManyInput>
    /**
     * Filter which order_lines to update
     */
    where?: order_linesWhereInput
    /**
     * Limit how many order_lines to update.
     */
    limit?: number
  }

  /**
   * order_lines updateManyAndReturn
   */
  export type order_linesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * The data used to update order_lines.
     */
    data: XOR<order_linesUpdateManyMutationInput, order_linesUncheckedUpdateManyInput>
    /**
     * Filter which order_lines to update
     */
    where?: order_linesWhereInput
    /**
     * Limit how many order_lines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_lines upsert
   */
  export type order_linesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    /**
     * The filter to search for the order_lines to update in case it exists.
     */
    where: order_linesWhereUniqueInput
    /**
     * In case the order_lines found by the `where` argument doesn't exist, create a new order_lines with this data.
     */
    create: XOR<order_linesCreateInput, order_linesUncheckedCreateInput>
    /**
     * In case the order_lines was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_linesUpdateInput, order_linesUncheckedUpdateInput>
  }

  /**
   * order_lines delete
   */
  export type order_linesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    /**
     * Filter which order_lines to delete.
     */
    where: order_linesWhereUniqueInput
  }

  /**
   * order_lines deleteMany
   */
  export type order_linesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_lines to delete
     */
    where?: order_linesWhereInput
    /**
     * Limit how many order_lines to delete.
     */
    limit?: number
  }

  /**
   * order_lines without action
   */
  export type order_linesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    client_id: number | null
    total: Decimal | null
    created_by: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    client_id: number | null
    total: Decimal | null
    created_by: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    client_id: number | null
    table_number: string | null
    order_type: string | null
    status: $Enums.order_status | null
    total: Decimal | null
    notes: string | null
    created_at: Date | null
    created_by: number | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    client_id: number | null
    table_number: string | null
    order_type: string | null
    status: $Enums.order_status | null
    total: Decimal | null
    notes: string | null
    created_at: Date | null
    created_by: number | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    client_id: number
    table_number: number
    order_type: number
    status: number
    total: number
    notes: number
    created_at: number
    created_by: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    client_id?: true
    total?: true
    created_by?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    client_id?: true
    total?: true
    created_by?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    client_id?: true
    table_number?: true
    order_type?: true
    status?: true
    total?: true
    notes?: true
    created_at?: true
    created_by?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    client_id?: true
    table_number?: true
    order_type?: true
    status?: true
    total?: true
    notes?: true
    created_at?: true
    created_by?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    client_id?: true
    table_number?: true
    order_type?: true
    status?: true
    total?: true
    notes?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    client_id: number | null
    table_number: string | null
    order_type: string | null
    status: $Enums.order_status | null
    total: Decimal | null
    notes: string | null
    created_at: Date | null
    created_by: number | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    table_number?: boolean
    order_type?: boolean
    status?: boolean
    total?: boolean
    notes?: boolean
    created_at?: boolean
    created_by?: boolean
    order_lines?: boolean | orders$order_linesArgs<ExtArgs>
    clients?: boolean | orders$clientsArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
    payments?: boolean | orders$paymentsArgs<ExtArgs>
    stock_movements?: boolean | orders$stock_movementsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    table_number?: boolean
    order_type?: boolean
    status?: boolean
    total?: boolean
    notes?: boolean
    created_at?: boolean
    created_by?: boolean
    clients?: boolean | orders$clientsArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    table_number?: boolean
    order_type?: boolean
    status?: boolean
    total?: boolean
    notes?: boolean
    created_at?: boolean
    created_by?: boolean
    clients?: boolean | orders$clientsArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    id?: boolean
    client_id?: boolean
    table_number?: boolean
    order_type?: boolean
    status?: boolean
    total?: boolean
    notes?: boolean
    created_at?: boolean
    created_by?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "client_id" | "table_number" | "order_type" | "status" | "total" | "notes" | "created_at" | "created_by", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_lines?: boolean | orders$order_linesArgs<ExtArgs>
    clients?: boolean | orders$clientsArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
    payments?: boolean | orders$paymentsArgs<ExtArgs>
    stock_movements?: boolean | orders$stock_movementsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ordersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | orders$clientsArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
  }
  export type ordersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | orders$clientsArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      order_lines: Prisma.$order_linesPayload<ExtArgs>[]
      clients: Prisma.$clientsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
      payments: Prisma.$paymentsPayload<ExtArgs>[]
      stock_movements: Prisma.$stock_movementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      client_id: number | null
      table_number: string | null
      order_type: string | null
      status: $Enums.order_status | null
      total: Prisma.Decimal | null
      notes: string | null
      created_at: Date | null
      created_by: number | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {ordersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_lines<T extends orders$order_linesArgs<ExtArgs> = {}>(args?: Subset<T, orders$order_linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clients<T extends orders$clientsArgs<ExtArgs> = {}>(args?: Subset<T, orders$clientsArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends orders$usersArgs<ExtArgs> = {}>(args?: Subset<T, orders$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payments<T extends orders$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, orders$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stock_movements<T extends orders$stock_movementsArgs<ExtArgs> = {}>(args?: Subset<T, orders$stock_movementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'Int'>
    readonly client_id: FieldRef<"orders", 'Int'>
    readonly table_number: FieldRef<"orders", 'String'>
    readonly order_type: FieldRef<"orders", 'String'>
    readonly status: FieldRef<"orders", 'order_status'>
    readonly total: FieldRef<"orders", 'Decimal'>
    readonly notes: FieldRef<"orders", 'String'>
    readonly created_at: FieldRef<"orders", 'DateTime'>
    readonly created_by: FieldRef<"orders", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data?: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders updateManyAndReturn
   */
  export type ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.order_lines
   */
  export type orders$order_linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    where?: order_linesWhereInput
    orderBy?: order_linesOrderByWithRelationInput | order_linesOrderByWithRelationInput[]
    cursor?: order_linesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_linesScalarFieldEnum | Order_linesScalarFieldEnum[]
  }

  /**
   * orders.clients
   */
  export type orders$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    where?: clientsWhereInput
  }

  /**
   * orders.users
   */
  export type orders$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * orders.payments
   */
  export type orders$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    cursor?: paymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * orders.stock_movements
   */
  export type orders$stock_movementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movements
     */
    select?: stock_movementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movements
     */
    omit?: stock_movementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_movementsInclude<ExtArgs> | null
    where?: stock_movementsWhereInput
    orderBy?: stock_movementsOrderByWithRelationInput | stock_movementsOrderByWithRelationInput[]
    cursor?: stock_movementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Stock_movementsScalarFieldEnum | Stock_movementsScalarFieldEnum[]
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
    amount: Decimal | null
    created_by: number | null
  }

  export type PaymentsSumAggregateOutputType = {
    id: number | null
    order_id: number | null
    amount: Decimal | null
    created_by: number | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    method: $Enums.payment_method | null
    amount: Decimal | null
    reference: string | null
    paid_at: Date | null
    created_by: number | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    method: $Enums.payment_method | null
    amount: Decimal | null
    reference: string | null
    paid_at: Date | null
    created_by: number | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    order_id: number
    method: number
    amount: number
    reference: number
    paid_at: number
    created_by: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
    created_by?: true
  }

  export type PaymentsSumAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
    created_by?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    order_id?: true
    method?: true
    amount?: true
    reference?: true
    paid_at?: true
    created_by?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    order_id?: true
    method?: true
    amount?: true
    reference?: true
    paid_at?: true
    created_by?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    order_id?: true
    method?: true
    amount?: true
    reference?: true
    paid_at?: true
    created_by?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to aggregate.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type paymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithAggregationInput | paymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: paymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: number
    order_id: number
    method: $Enums.payment_method
    amount: Decimal
    reference: string | null
    paid_at: Date | null
    created_by: number | null
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type paymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    method?: boolean
    amount?: boolean
    reference?: boolean
    paid_at?: boolean
    created_by?: boolean
    users?: boolean | payments$usersArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    method?: boolean
    amount?: boolean
    reference?: boolean
    paid_at?: boolean
    created_by?: boolean
    users?: boolean | payments$usersArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    method?: boolean
    amount?: boolean
    reference?: boolean
    paid_at?: boolean
    created_by?: boolean
    users?: boolean | payments$usersArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectScalar = {
    id?: boolean
    order_id?: boolean
    method?: boolean
    amount?: boolean
    reference?: boolean
    paid_at?: boolean
    created_by?: boolean
  }

  export type paymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "method" | "amount" | "reference" | "paid_at" | "created_by", ExtArgs["result"]["payments"]>
  export type paymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | payments$usersArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }
  export type paymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | payments$usersArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }
  export type paymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | payments$usersArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }

  export type $paymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payments"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      orders: Prisma.$ordersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number
      method: $Enums.payment_method
      amount: Prisma.Decimal
      reference: string | null
      paid_at: Date | null
      created_by: number | null
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = $Result.GetResult<Prisma.$paymentsPayload, S>

  type paymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface paymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payments'], meta: { name: 'payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {paymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentsFindUniqueArgs>(args: SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentsFindFirstArgs>(args?: SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentsFindManyArgs>(args?: SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {paymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends paymentsCreateArgs>(args: SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentsCreateManyArgs>(args?: SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {paymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {paymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends paymentsDeleteArgs>(args: SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {paymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentsUpdateArgs>(args: SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentsDeleteManyArgs>(args?: SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentsUpdateManyArgs>(args: SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {paymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends paymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {paymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends paymentsUpsertArgs>(args: SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentsCountArgs>(
      args?: Subset<T, paymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends paymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentsGroupByArgs['orderBy'] }
        : { orderBy?: paymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payments model
   */
  readonly fields: paymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends payments$usersArgs<ExtArgs> = {}>(args?: Subset<T, payments$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payments model
   */
  interface paymentsFieldRefs {
    readonly id: FieldRef<"payments", 'Int'>
    readonly order_id: FieldRef<"payments", 'Int'>
    readonly method: FieldRef<"payments", 'payment_method'>
    readonly amount: FieldRef<"payments", 'Decimal'>
    readonly reference: FieldRef<"payments", 'String'>
    readonly paid_at: FieldRef<"payments", 'DateTime'>
    readonly created_by: FieldRef<"payments", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * payments findUnique
   */
  export type paymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findUniqueOrThrow
   */
  export type paymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findFirst
   */
  export type paymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findFirstOrThrow
   */
  export type paymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findMany
   */
  export type paymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments create
   */
  export type paymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a payments.
     */
    data: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
  }

  /**
   * payments createMany
   */
  export type paymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payments createManyAndReturn
   */
  export type paymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments update
   */
  export type paymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a payments.
     */
    data: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
    /**
     * Choose, which payments to update.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments updateMany
   */
  export type paymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payments updateManyAndReturn
   */
  export type paymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments upsert
   */
  export type paymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the payments to update in case it exists.
     */
    where: paymentsWhereUniqueInput
    /**
     * In case the payments found by the `where` argument doesn't exist, create a new payments with this data.
     */
    create: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
    /**
     * In case the payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
  }

  /**
   * payments delete
   */
  export type paymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter which payments to delete.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments deleteMany
   */
  export type paymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payments.users
   */
  export type payments$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * payments without action
   */
  export type paymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
  }


  /**
   * Model recipe_items
   */

  export type AggregateRecipe_items = {
    _count: Recipe_itemsCountAggregateOutputType | null
    _avg: Recipe_itemsAvgAggregateOutputType | null
    _sum: Recipe_itemsSumAggregateOutputType | null
    _min: Recipe_itemsMinAggregateOutputType | null
    _max: Recipe_itemsMaxAggregateOutputType | null
  }

  export type Recipe_itemsAvgAggregateOutputType = {
    id: number | null
    menu_item_id: number | null
    stock_item_id: number | null
    quantity: Decimal | null
  }

  export type Recipe_itemsSumAggregateOutputType = {
    id: number | null
    menu_item_id: number | null
    stock_item_id: number | null
    quantity: Decimal | null
  }

  export type Recipe_itemsMinAggregateOutputType = {
    id: number | null
    menu_item_id: number | null
    stock_item_id: number | null
    quantity: Decimal | null
  }

  export type Recipe_itemsMaxAggregateOutputType = {
    id: number | null
    menu_item_id: number | null
    stock_item_id: number | null
    quantity: Decimal | null
  }

  export type Recipe_itemsCountAggregateOutputType = {
    id: number
    menu_item_id: number
    stock_item_id: number
    quantity: number
    _all: number
  }


  export type Recipe_itemsAvgAggregateInputType = {
    id?: true
    menu_item_id?: true
    stock_item_id?: true
    quantity?: true
  }

  export type Recipe_itemsSumAggregateInputType = {
    id?: true
    menu_item_id?: true
    stock_item_id?: true
    quantity?: true
  }

  export type Recipe_itemsMinAggregateInputType = {
    id?: true
    menu_item_id?: true
    stock_item_id?: true
    quantity?: true
  }

  export type Recipe_itemsMaxAggregateInputType = {
    id?: true
    menu_item_id?: true
    stock_item_id?: true
    quantity?: true
  }

  export type Recipe_itemsCountAggregateInputType = {
    id?: true
    menu_item_id?: true
    stock_item_id?: true
    quantity?: true
    _all?: true
  }

  export type Recipe_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipe_items to aggregate.
     */
    where?: recipe_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipe_items to fetch.
     */
    orderBy?: recipe_itemsOrderByWithRelationInput | recipe_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recipe_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipe_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipe_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recipe_items
    **/
    _count?: true | Recipe_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Recipe_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Recipe_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Recipe_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Recipe_itemsMaxAggregateInputType
  }

  export type GetRecipe_itemsAggregateType<T extends Recipe_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe_items[P]>
      : GetScalarType<T[P], AggregateRecipe_items[P]>
  }




  export type recipe_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipe_itemsWhereInput
    orderBy?: recipe_itemsOrderByWithAggregationInput | recipe_itemsOrderByWithAggregationInput[]
    by: Recipe_itemsScalarFieldEnum[] | Recipe_itemsScalarFieldEnum
    having?: recipe_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Recipe_itemsCountAggregateInputType | true
    _avg?: Recipe_itemsAvgAggregateInputType
    _sum?: Recipe_itemsSumAggregateInputType
    _min?: Recipe_itemsMinAggregateInputType
    _max?: Recipe_itemsMaxAggregateInputType
  }

  export type Recipe_itemsGroupByOutputType = {
    id: number
    menu_item_id: number
    stock_item_id: number
    quantity: Decimal
    _count: Recipe_itemsCountAggregateOutputType | null
    _avg: Recipe_itemsAvgAggregateOutputType | null
    _sum: Recipe_itemsSumAggregateOutputType | null
    _min: Recipe_itemsMinAggregateOutputType | null
    _max: Recipe_itemsMaxAggregateOutputType | null
  }

  type GetRecipe_itemsGroupByPayload<T extends recipe_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Recipe_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Recipe_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Recipe_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Recipe_itemsGroupByOutputType[P]>
        }
      >
    >


  export type recipe_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menu_item_id?: boolean
    stock_item_id?: boolean
    quantity?: boolean
    menu_items?: boolean | menu_itemsDefaultArgs<ExtArgs>
    stock_items?: boolean | stock_itemsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe_items"]>

  export type recipe_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menu_item_id?: boolean
    stock_item_id?: boolean
    quantity?: boolean
    menu_items?: boolean | menu_itemsDefaultArgs<ExtArgs>
    stock_items?: boolean | stock_itemsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe_items"]>

  export type recipe_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menu_item_id?: boolean
    stock_item_id?: boolean
    quantity?: boolean
    menu_items?: boolean | menu_itemsDefaultArgs<ExtArgs>
    stock_items?: boolean | stock_itemsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe_items"]>

  export type recipe_itemsSelectScalar = {
    id?: boolean
    menu_item_id?: boolean
    stock_item_id?: boolean
    quantity?: boolean
  }

  export type recipe_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "menu_item_id" | "stock_item_id" | "quantity", ExtArgs["result"]["recipe_items"]>
  export type recipe_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu_items?: boolean | menu_itemsDefaultArgs<ExtArgs>
    stock_items?: boolean | stock_itemsDefaultArgs<ExtArgs>
  }
  export type recipe_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu_items?: boolean | menu_itemsDefaultArgs<ExtArgs>
    stock_items?: boolean | stock_itemsDefaultArgs<ExtArgs>
  }
  export type recipe_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu_items?: boolean | menu_itemsDefaultArgs<ExtArgs>
    stock_items?: boolean | stock_itemsDefaultArgs<ExtArgs>
  }

  export type $recipe_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recipe_items"
    objects: {
      menu_items: Prisma.$menu_itemsPayload<ExtArgs>
      stock_items: Prisma.$stock_itemsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      menu_item_id: number
      stock_item_id: number
      quantity: Prisma.Decimal
    }, ExtArgs["result"]["recipe_items"]>
    composites: {}
  }

  type recipe_itemsGetPayload<S extends boolean | null | undefined | recipe_itemsDefaultArgs> = $Result.GetResult<Prisma.$recipe_itemsPayload, S>

  type recipe_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recipe_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Recipe_itemsCountAggregateInputType | true
    }

  export interface recipe_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recipe_items'], meta: { name: 'recipe_items' } }
    /**
     * Find zero or one Recipe_items that matches the filter.
     * @param {recipe_itemsFindUniqueArgs} args - Arguments to find a Recipe_items
     * @example
     * // Get one Recipe_items
     * const recipe_items = await prisma.recipe_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recipe_itemsFindUniqueArgs>(args: SelectSubset<T, recipe_itemsFindUniqueArgs<ExtArgs>>): Prisma__recipe_itemsClient<$Result.GetResult<Prisma.$recipe_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recipe_itemsFindUniqueOrThrowArgs} args - Arguments to find a Recipe_items
     * @example
     * // Get one Recipe_items
     * const recipe_items = await prisma.recipe_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recipe_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, recipe_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recipe_itemsClient<$Result.GetResult<Prisma.$recipe_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipe_itemsFindFirstArgs} args - Arguments to find a Recipe_items
     * @example
     * // Get one Recipe_items
     * const recipe_items = await prisma.recipe_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recipe_itemsFindFirstArgs>(args?: SelectSubset<T, recipe_itemsFindFirstArgs<ExtArgs>>): Prisma__recipe_itemsClient<$Result.GetResult<Prisma.$recipe_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipe_itemsFindFirstOrThrowArgs} args - Arguments to find a Recipe_items
     * @example
     * // Get one Recipe_items
     * const recipe_items = await prisma.recipe_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recipe_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, recipe_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__recipe_itemsClient<$Result.GetResult<Prisma.$recipe_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipe_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipe_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipe_items
     * const recipe_items = await prisma.recipe_items.findMany()
     * 
     * // Get first 10 Recipe_items
     * const recipe_items = await prisma.recipe_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipe_itemsWithIdOnly = await prisma.recipe_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recipe_itemsFindManyArgs>(args?: SelectSubset<T, recipe_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipe_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe_items.
     * @param {recipe_itemsCreateArgs} args - Arguments to create a Recipe_items.
     * @example
     * // Create one Recipe_items
     * const Recipe_items = await prisma.recipe_items.create({
     *   data: {
     *     // ... data to create a Recipe_items
     *   }
     * })
     * 
     */
    create<T extends recipe_itemsCreateArgs>(args: SelectSubset<T, recipe_itemsCreateArgs<ExtArgs>>): Prisma__recipe_itemsClient<$Result.GetResult<Prisma.$recipe_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipe_items.
     * @param {recipe_itemsCreateManyArgs} args - Arguments to create many Recipe_items.
     * @example
     * // Create many Recipe_items
     * const recipe_items = await prisma.recipe_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recipe_itemsCreateManyArgs>(args?: SelectSubset<T, recipe_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipe_items and returns the data saved in the database.
     * @param {recipe_itemsCreateManyAndReturnArgs} args - Arguments to create many Recipe_items.
     * @example
     * // Create many Recipe_items
     * const recipe_items = await prisma.recipe_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipe_items and only return the `id`
     * const recipe_itemsWithIdOnly = await prisma.recipe_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends recipe_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, recipe_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipe_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe_items.
     * @param {recipe_itemsDeleteArgs} args - Arguments to delete one Recipe_items.
     * @example
     * // Delete one Recipe_items
     * const Recipe_items = await prisma.recipe_items.delete({
     *   where: {
     *     // ... filter to delete one Recipe_items
     *   }
     * })
     * 
     */
    delete<T extends recipe_itemsDeleteArgs>(args: SelectSubset<T, recipe_itemsDeleteArgs<ExtArgs>>): Prisma__recipe_itemsClient<$Result.GetResult<Prisma.$recipe_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe_items.
     * @param {recipe_itemsUpdateArgs} args - Arguments to update one Recipe_items.
     * @example
     * // Update one Recipe_items
     * const recipe_items = await prisma.recipe_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recipe_itemsUpdateArgs>(args: SelectSubset<T, recipe_itemsUpdateArgs<ExtArgs>>): Prisma__recipe_itemsClient<$Result.GetResult<Prisma.$recipe_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipe_items.
     * @param {recipe_itemsDeleteManyArgs} args - Arguments to filter Recipe_items to delete.
     * @example
     * // Delete a few Recipe_items
     * const { count } = await prisma.recipe_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recipe_itemsDeleteManyArgs>(args?: SelectSubset<T, recipe_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipe_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipe_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipe_items
     * const recipe_items = await prisma.recipe_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recipe_itemsUpdateManyArgs>(args: SelectSubset<T, recipe_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipe_items and returns the data updated in the database.
     * @param {recipe_itemsUpdateManyAndReturnArgs} args - Arguments to update many Recipe_items.
     * @example
     * // Update many Recipe_items
     * const recipe_items = await prisma.recipe_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipe_items and only return the `id`
     * const recipe_itemsWithIdOnly = await prisma.recipe_items.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends recipe_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, recipe_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipe_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe_items.
     * @param {recipe_itemsUpsertArgs} args - Arguments to update or create a Recipe_items.
     * @example
     * // Update or create a Recipe_items
     * const recipe_items = await prisma.recipe_items.upsert({
     *   create: {
     *     // ... data to create a Recipe_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe_items we want to update
     *   }
     * })
     */
    upsert<T extends recipe_itemsUpsertArgs>(args: SelectSubset<T, recipe_itemsUpsertArgs<ExtArgs>>): Prisma__recipe_itemsClient<$Result.GetResult<Prisma.$recipe_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipe_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipe_itemsCountArgs} args - Arguments to filter Recipe_items to count.
     * @example
     * // Count the number of Recipe_items
     * const count = await prisma.recipe_items.count({
     *   where: {
     *     // ... the filter for the Recipe_items we want to count
     *   }
     * })
    **/
    count<T extends recipe_itemsCountArgs>(
      args?: Subset<T, recipe_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Recipe_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Recipe_itemsAggregateArgs>(args: Subset<T, Recipe_itemsAggregateArgs>): Prisma.PrismaPromise<GetRecipe_itemsAggregateType<T>>

    /**
     * Group by Recipe_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipe_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recipe_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recipe_itemsGroupByArgs['orderBy'] }
        : { orderBy?: recipe_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recipe_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipe_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recipe_items model
   */
  readonly fields: recipe_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recipe_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recipe_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu_items<T extends menu_itemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, menu_itemsDefaultArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stock_items<T extends stock_itemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stock_itemsDefaultArgs<ExtArgs>>): Prisma__stock_itemsClient<$Result.GetResult<Prisma.$stock_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the recipe_items model
   */
  interface recipe_itemsFieldRefs {
    readonly id: FieldRef<"recipe_items", 'Int'>
    readonly menu_item_id: FieldRef<"recipe_items", 'Int'>
    readonly stock_item_id: FieldRef<"recipe_items", 'Int'>
    readonly quantity: FieldRef<"recipe_items", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * recipe_items findUnique
   */
  export type recipe_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_items
     */
    select?: recipe_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_items
     */
    omit?: recipe_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_itemsInclude<ExtArgs> | null
    /**
     * Filter, which recipe_items to fetch.
     */
    where: recipe_itemsWhereUniqueInput
  }

  /**
   * recipe_items findUniqueOrThrow
   */
  export type recipe_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_items
     */
    select?: recipe_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_items
     */
    omit?: recipe_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_itemsInclude<ExtArgs> | null
    /**
     * Filter, which recipe_items to fetch.
     */
    where: recipe_itemsWhereUniqueInput
  }

  /**
   * recipe_items findFirst
   */
  export type recipe_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_items
     */
    select?: recipe_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_items
     */
    omit?: recipe_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_itemsInclude<ExtArgs> | null
    /**
     * Filter, which recipe_items to fetch.
     */
    where?: recipe_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipe_items to fetch.
     */
    orderBy?: recipe_itemsOrderByWithRelationInput | recipe_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipe_items.
     */
    cursor?: recipe_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipe_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipe_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipe_items.
     */
    distinct?: Recipe_itemsScalarFieldEnum | Recipe_itemsScalarFieldEnum[]
  }

  /**
   * recipe_items findFirstOrThrow
   */
  export type recipe_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_items
     */
    select?: recipe_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_items
     */
    omit?: recipe_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_itemsInclude<ExtArgs> | null
    /**
     * Filter, which recipe_items to fetch.
     */
    where?: recipe_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipe_items to fetch.
     */
    orderBy?: recipe_itemsOrderByWithRelationInput | recipe_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipe_items.
     */
    cursor?: recipe_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipe_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipe_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipe_items.
     */
    distinct?: Recipe_itemsScalarFieldEnum | Recipe_itemsScalarFieldEnum[]
  }

  /**
   * recipe_items findMany
   */
  export type recipe_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_items
     */
    select?: recipe_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_items
     */
    omit?: recipe_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_itemsInclude<ExtArgs> | null
    /**
     * Filter, which recipe_items to fetch.
     */
    where?: recipe_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipe_items to fetch.
     */
    orderBy?: recipe_itemsOrderByWithRelationInput | recipe_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recipe_items.
     */
    cursor?: recipe_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipe_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipe_items.
     */
    skip?: number
    distinct?: Recipe_itemsScalarFieldEnum | Recipe_itemsScalarFieldEnum[]
  }

  /**
   * recipe_items create
   */
  export type recipe_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_items
     */
    select?: recipe_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_items
     */
    omit?: recipe_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a recipe_items.
     */
    data: XOR<recipe_itemsCreateInput, recipe_itemsUncheckedCreateInput>
  }

  /**
   * recipe_items createMany
   */
  export type recipe_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recipe_items.
     */
    data: recipe_itemsCreateManyInput | recipe_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recipe_items createManyAndReturn
   */
  export type recipe_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_items
     */
    select?: recipe_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_items
     */
    omit?: recipe_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many recipe_items.
     */
    data: recipe_itemsCreateManyInput | recipe_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * recipe_items update
   */
  export type recipe_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_items
     */
    select?: recipe_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_items
     */
    omit?: recipe_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a recipe_items.
     */
    data: XOR<recipe_itemsUpdateInput, recipe_itemsUncheckedUpdateInput>
    /**
     * Choose, which recipe_items to update.
     */
    where: recipe_itemsWhereUniqueInput
  }

  /**
   * recipe_items updateMany
   */
  export type recipe_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recipe_items.
     */
    data: XOR<recipe_itemsUpdateManyMutationInput, recipe_itemsUncheckedUpdateManyInput>
    /**
     * Filter which recipe_items to update
     */
    where?: recipe_itemsWhereInput
    /**
     * Limit how many recipe_items to update.
     */
    limit?: number
  }

  /**
   * recipe_items updateManyAndReturn
   */
  export type recipe_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_items
     */
    select?: recipe_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_items
     */
    omit?: recipe_itemsOmit<ExtArgs> | null
    /**
     * The data used to update recipe_items.
     */
    data: XOR<recipe_itemsUpdateManyMutationInput, recipe_itemsUncheckedUpdateManyInput>
    /**
     * Filter which recipe_items to update
     */
    where?: recipe_itemsWhereInput
    /**
     * Limit how many recipe_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * recipe_items upsert
   */
  export type recipe_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_items
     */
    select?: recipe_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_items
     */
    omit?: recipe_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the recipe_items to update in case it exists.
     */
    where: recipe_itemsWhereUniqueInput
    /**
     * In case the recipe_items found by the `where` argument doesn't exist, create a new recipe_items with this data.
     */
    create: XOR<recipe_itemsCreateInput, recipe_itemsUncheckedCreateInput>
    /**
     * In case the recipe_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recipe_itemsUpdateInput, recipe_itemsUncheckedUpdateInput>
  }

  /**
   * recipe_items delete
   */
  export type recipe_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_items
     */
    select?: recipe_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_items
     */
    omit?: recipe_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_itemsInclude<ExtArgs> | null
    /**
     * Filter which recipe_items to delete.
     */
    where: recipe_itemsWhereUniqueInput
  }

  /**
   * recipe_items deleteMany
   */
  export type recipe_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipe_items to delete
     */
    where?: recipe_itemsWhereInput
    /**
     * Limit how many recipe_items to delete.
     */
    limit?: number
  }

  /**
   * recipe_items without action
   */
  export type recipe_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_items
     */
    select?: recipe_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_items
     */
    omit?: recipe_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_itemsInclude<ExtArgs> | null
  }


  /**
   * Model stock_items
   */

  export type AggregateStock_items = {
    _count: Stock_itemsCountAggregateOutputType | null
    _avg: Stock_itemsAvgAggregateOutputType | null
    _sum: Stock_itemsSumAggregateOutputType | null
    _min: Stock_itemsMinAggregateOutputType | null
    _max: Stock_itemsMaxAggregateOutputType | null
  }

  export type Stock_itemsAvgAggregateOutputType = {
    id: number | null
    quantity: Decimal | null
    min_alert_level: Decimal | null
  }

  export type Stock_itemsSumAggregateOutputType = {
    id: number | null
    quantity: Decimal | null
    min_alert_level: Decimal | null
  }

  export type Stock_itemsMinAggregateOutputType = {
    id: number | null
    name: string | null
    unit: string | null
    quantity: Decimal | null
    min_alert_level: Decimal | null
    created_at: Date | null
  }

  export type Stock_itemsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    unit: string | null
    quantity: Decimal | null
    min_alert_level: Decimal | null
    created_at: Date | null
  }

  export type Stock_itemsCountAggregateOutputType = {
    id: number
    name: number
    unit: number
    quantity: number
    min_alert_level: number
    created_at: number
    _all: number
  }


  export type Stock_itemsAvgAggregateInputType = {
    id?: true
    quantity?: true
    min_alert_level?: true
  }

  export type Stock_itemsSumAggregateInputType = {
    id?: true
    quantity?: true
    min_alert_level?: true
  }

  export type Stock_itemsMinAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    quantity?: true
    min_alert_level?: true
    created_at?: true
  }

  export type Stock_itemsMaxAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    quantity?: true
    min_alert_level?: true
    created_at?: true
  }

  export type Stock_itemsCountAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    quantity?: true
    min_alert_level?: true
    created_at?: true
    _all?: true
  }

  export type Stock_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stock_items to aggregate.
     */
    where?: stock_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_items to fetch.
     */
    orderBy?: stock_itemsOrderByWithRelationInput | stock_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stock_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stock_items
    **/
    _count?: true | Stock_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Stock_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Stock_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stock_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stock_itemsMaxAggregateInputType
  }

  export type GetStock_itemsAggregateType<T extends Stock_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateStock_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock_items[P]>
      : GetScalarType<T[P], AggregateStock_items[P]>
  }




  export type stock_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stock_itemsWhereInput
    orderBy?: stock_itemsOrderByWithAggregationInput | stock_itemsOrderByWithAggregationInput[]
    by: Stock_itemsScalarFieldEnum[] | Stock_itemsScalarFieldEnum
    having?: stock_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stock_itemsCountAggregateInputType | true
    _avg?: Stock_itemsAvgAggregateInputType
    _sum?: Stock_itemsSumAggregateInputType
    _min?: Stock_itemsMinAggregateInputType
    _max?: Stock_itemsMaxAggregateInputType
  }

  export type Stock_itemsGroupByOutputType = {
    id: number
    name: string
    unit: string
    quantity: Decimal | null
    min_alert_level: Decimal | null
    created_at: Date | null
    _count: Stock_itemsCountAggregateOutputType | null
    _avg: Stock_itemsAvgAggregateOutputType | null
    _sum: Stock_itemsSumAggregateOutputType | null
    _min: Stock_itemsMinAggregateOutputType | null
    _max: Stock_itemsMaxAggregateOutputType | null
  }

  type GetStock_itemsGroupByPayload<T extends stock_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stock_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stock_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stock_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Stock_itemsGroupByOutputType[P]>
        }
      >
    >


  export type stock_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    quantity?: boolean
    min_alert_level?: boolean
    created_at?: boolean
    recipe_items?: boolean | stock_items$recipe_itemsArgs<ExtArgs>
    stock_movements?: boolean | stock_items$stock_movementsArgs<ExtArgs>
    _count?: boolean | Stock_itemsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock_items"]>

  export type stock_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    quantity?: boolean
    min_alert_level?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["stock_items"]>

  export type stock_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    quantity?: boolean
    min_alert_level?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["stock_items"]>

  export type stock_itemsSelectScalar = {
    id?: boolean
    name?: boolean
    unit?: boolean
    quantity?: boolean
    min_alert_level?: boolean
    created_at?: boolean
  }

  export type stock_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "unit" | "quantity" | "min_alert_level" | "created_at", ExtArgs["result"]["stock_items"]>
  export type stock_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe_items?: boolean | stock_items$recipe_itemsArgs<ExtArgs>
    stock_movements?: boolean | stock_items$stock_movementsArgs<ExtArgs>
    _count?: boolean | Stock_itemsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type stock_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type stock_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $stock_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stock_items"
    objects: {
      recipe_items: Prisma.$recipe_itemsPayload<ExtArgs>[]
      stock_movements: Prisma.$stock_movementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      unit: string
      quantity: Prisma.Decimal | null
      min_alert_level: Prisma.Decimal | null
      created_at: Date | null
    }, ExtArgs["result"]["stock_items"]>
    composites: {}
  }

  type stock_itemsGetPayload<S extends boolean | null | undefined | stock_itemsDefaultArgs> = $Result.GetResult<Prisma.$stock_itemsPayload, S>

  type stock_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stock_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stock_itemsCountAggregateInputType | true
    }

  export interface stock_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stock_items'], meta: { name: 'stock_items' } }
    /**
     * Find zero or one Stock_items that matches the filter.
     * @param {stock_itemsFindUniqueArgs} args - Arguments to find a Stock_items
     * @example
     * // Get one Stock_items
     * const stock_items = await prisma.stock_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stock_itemsFindUniqueArgs>(args: SelectSubset<T, stock_itemsFindUniqueArgs<ExtArgs>>): Prisma__stock_itemsClient<$Result.GetResult<Prisma.$stock_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stock_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stock_itemsFindUniqueOrThrowArgs} args - Arguments to find a Stock_items
     * @example
     * // Get one Stock_items
     * const stock_items = await prisma.stock_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stock_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, stock_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stock_itemsClient<$Result.GetResult<Prisma.$stock_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_itemsFindFirstArgs} args - Arguments to find a Stock_items
     * @example
     * // Get one Stock_items
     * const stock_items = await prisma.stock_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stock_itemsFindFirstArgs>(args?: SelectSubset<T, stock_itemsFindFirstArgs<ExtArgs>>): Prisma__stock_itemsClient<$Result.GetResult<Prisma.$stock_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_itemsFindFirstOrThrowArgs} args - Arguments to find a Stock_items
     * @example
     * // Get one Stock_items
     * const stock_items = await prisma.stock_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stock_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, stock_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__stock_itemsClient<$Result.GetResult<Prisma.$stock_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stock_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stock_items
     * const stock_items = await prisma.stock_items.findMany()
     * 
     * // Get first 10 Stock_items
     * const stock_items = await prisma.stock_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stock_itemsWithIdOnly = await prisma.stock_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stock_itemsFindManyArgs>(args?: SelectSubset<T, stock_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stock_items.
     * @param {stock_itemsCreateArgs} args - Arguments to create a Stock_items.
     * @example
     * // Create one Stock_items
     * const Stock_items = await prisma.stock_items.create({
     *   data: {
     *     // ... data to create a Stock_items
     *   }
     * })
     * 
     */
    create<T extends stock_itemsCreateArgs>(args: SelectSubset<T, stock_itemsCreateArgs<ExtArgs>>): Prisma__stock_itemsClient<$Result.GetResult<Prisma.$stock_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stock_items.
     * @param {stock_itemsCreateManyArgs} args - Arguments to create many Stock_items.
     * @example
     * // Create many Stock_items
     * const stock_items = await prisma.stock_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stock_itemsCreateManyArgs>(args?: SelectSubset<T, stock_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stock_items and returns the data saved in the database.
     * @param {stock_itemsCreateManyAndReturnArgs} args - Arguments to create many Stock_items.
     * @example
     * // Create many Stock_items
     * const stock_items = await prisma.stock_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stock_items and only return the `id`
     * const stock_itemsWithIdOnly = await prisma.stock_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stock_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, stock_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stock_items.
     * @param {stock_itemsDeleteArgs} args - Arguments to delete one Stock_items.
     * @example
     * // Delete one Stock_items
     * const Stock_items = await prisma.stock_items.delete({
     *   where: {
     *     // ... filter to delete one Stock_items
     *   }
     * })
     * 
     */
    delete<T extends stock_itemsDeleteArgs>(args: SelectSubset<T, stock_itemsDeleteArgs<ExtArgs>>): Prisma__stock_itemsClient<$Result.GetResult<Prisma.$stock_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stock_items.
     * @param {stock_itemsUpdateArgs} args - Arguments to update one Stock_items.
     * @example
     * // Update one Stock_items
     * const stock_items = await prisma.stock_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stock_itemsUpdateArgs>(args: SelectSubset<T, stock_itemsUpdateArgs<ExtArgs>>): Prisma__stock_itemsClient<$Result.GetResult<Prisma.$stock_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stock_items.
     * @param {stock_itemsDeleteManyArgs} args - Arguments to filter Stock_items to delete.
     * @example
     * // Delete a few Stock_items
     * const { count } = await prisma.stock_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stock_itemsDeleteManyArgs>(args?: SelectSubset<T, stock_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stock_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stock_items
     * const stock_items = await prisma.stock_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stock_itemsUpdateManyArgs>(args: SelectSubset<T, stock_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stock_items and returns the data updated in the database.
     * @param {stock_itemsUpdateManyAndReturnArgs} args - Arguments to update many Stock_items.
     * @example
     * // Update many Stock_items
     * const stock_items = await prisma.stock_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stock_items and only return the `id`
     * const stock_itemsWithIdOnly = await prisma.stock_items.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends stock_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, stock_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stock_items.
     * @param {stock_itemsUpsertArgs} args - Arguments to update or create a Stock_items.
     * @example
     * // Update or create a Stock_items
     * const stock_items = await prisma.stock_items.upsert({
     *   create: {
     *     // ... data to create a Stock_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock_items we want to update
     *   }
     * })
     */
    upsert<T extends stock_itemsUpsertArgs>(args: SelectSubset<T, stock_itemsUpsertArgs<ExtArgs>>): Prisma__stock_itemsClient<$Result.GetResult<Prisma.$stock_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stock_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_itemsCountArgs} args - Arguments to filter Stock_items to count.
     * @example
     * // Count the number of Stock_items
     * const count = await prisma.stock_items.count({
     *   where: {
     *     // ... the filter for the Stock_items we want to count
     *   }
     * })
    **/
    count<T extends stock_itemsCountArgs>(
      args?: Subset<T, stock_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stock_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stock_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Stock_itemsAggregateArgs>(args: Subset<T, Stock_itemsAggregateArgs>): Prisma.PrismaPromise<GetStock_itemsAggregateType<T>>

    /**
     * Group by Stock_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stock_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stock_itemsGroupByArgs['orderBy'] }
        : { orderBy?: stock_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stock_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStock_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stock_items model
   */
  readonly fields: stock_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stock_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stock_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe_items<T extends stock_items$recipe_itemsArgs<ExtArgs> = {}>(args?: Subset<T, stock_items$recipe_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipe_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stock_movements<T extends stock_items$stock_movementsArgs<ExtArgs> = {}>(args?: Subset<T, stock_items$stock_movementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stock_items model
   */
  interface stock_itemsFieldRefs {
    readonly id: FieldRef<"stock_items", 'Int'>
    readonly name: FieldRef<"stock_items", 'String'>
    readonly unit: FieldRef<"stock_items", 'String'>
    readonly quantity: FieldRef<"stock_items", 'Decimal'>
    readonly min_alert_level: FieldRef<"stock_items", 'Decimal'>
    readonly created_at: FieldRef<"stock_items", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * stock_items findUnique
   */
  export type stock_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_items
     */
    select?: stock_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_items
     */
    omit?: stock_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_itemsInclude<ExtArgs> | null
    /**
     * Filter, which stock_items to fetch.
     */
    where: stock_itemsWhereUniqueInput
  }

  /**
   * stock_items findUniqueOrThrow
   */
  export type stock_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_items
     */
    select?: stock_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_items
     */
    omit?: stock_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_itemsInclude<ExtArgs> | null
    /**
     * Filter, which stock_items to fetch.
     */
    where: stock_itemsWhereUniqueInput
  }

  /**
   * stock_items findFirst
   */
  export type stock_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_items
     */
    select?: stock_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_items
     */
    omit?: stock_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_itemsInclude<ExtArgs> | null
    /**
     * Filter, which stock_items to fetch.
     */
    where?: stock_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_items to fetch.
     */
    orderBy?: stock_itemsOrderByWithRelationInput | stock_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stock_items.
     */
    cursor?: stock_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stock_items.
     */
    distinct?: Stock_itemsScalarFieldEnum | Stock_itemsScalarFieldEnum[]
  }

  /**
   * stock_items findFirstOrThrow
   */
  export type stock_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_items
     */
    select?: stock_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_items
     */
    omit?: stock_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_itemsInclude<ExtArgs> | null
    /**
     * Filter, which stock_items to fetch.
     */
    where?: stock_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_items to fetch.
     */
    orderBy?: stock_itemsOrderByWithRelationInput | stock_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stock_items.
     */
    cursor?: stock_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stock_items.
     */
    distinct?: Stock_itemsScalarFieldEnum | Stock_itemsScalarFieldEnum[]
  }

  /**
   * stock_items findMany
   */
  export type stock_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_items
     */
    select?: stock_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_items
     */
    omit?: stock_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_itemsInclude<ExtArgs> | null
    /**
     * Filter, which stock_items to fetch.
     */
    where?: stock_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_items to fetch.
     */
    orderBy?: stock_itemsOrderByWithRelationInput | stock_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stock_items.
     */
    cursor?: stock_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_items.
     */
    skip?: number
    distinct?: Stock_itemsScalarFieldEnum | Stock_itemsScalarFieldEnum[]
  }

  /**
   * stock_items create
   */
  export type stock_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_items
     */
    select?: stock_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_items
     */
    omit?: stock_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a stock_items.
     */
    data: XOR<stock_itemsCreateInput, stock_itemsUncheckedCreateInput>
  }

  /**
   * stock_items createMany
   */
  export type stock_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stock_items.
     */
    data: stock_itemsCreateManyInput | stock_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stock_items createManyAndReturn
   */
  export type stock_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_items
     */
    select?: stock_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stock_items
     */
    omit?: stock_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many stock_items.
     */
    data: stock_itemsCreateManyInput | stock_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stock_items update
   */
  export type stock_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_items
     */
    select?: stock_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_items
     */
    omit?: stock_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a stock_items.
     */
    data: XOR<stock_itemsUpdateInput, stock_itemsUncheckedUpdateInput>
    /**
     * Choose, which stock_items to update.
     */
    where: stock_itemsWhereUniqueInput
  }

  /**
   * stock_items updateMany
   */
  export type stock_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stock_items.
     */
    data: XOR<stock_itemsUpdateManyMutationInput, stock_itemsUncheckedUpdateManyInput>
    /**
     * Filter which stock_items to update
     */
    where?: stock_itemsWhereInput
    /**
     * Limit how many stock_items to update.
     */
    limit?: number
  }

  /**
   * stock_items updateManyAndReturn
   */
  export type stock_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_items
     */
    select?: stock_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stock_items
     */
    omit?: stock_itemsOmit<ExtArgs> | null
    /**
     * The data used to update stock_items.
     */
    data: XOR<stock_itemsUpdateManyMutationInput, stock_itemsUncheckedUpdateManyInput>
    /**
     * Filter which stock_items to update
     */
    where?: stock_itemsWhereInput
    /**
     * Limit how many stock_items to update.
     */
    limit?: number
  }

  /**
   * stock_items upsert
   */
  export type stock_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_items
     */
    select?: stock_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_items
     */
    omit?: stock_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the stock_items to update in case it exists.
     */
    where: stock_itemsWhereUniqueInput
    /**
     * In case the stock_items found by the `where` argument doesn't exist, create a new stock_items with this data.
     */
    create: XOR<stock_itemsCreateInput, stock_itemsUncheckedCreateInput>
    /**
     * In case the stock_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stock_itemsUpdateInput, stock_itemsUncheckedUpdateInput>
  }

  /**
   * stock_items delete
   */
  export type stock_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_items
     */
    select?: stock_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_items
     */
    omit?: stock_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_itemsInclude<ExtArgs> | null
    /**
     * Filter which stock_items to delete.
     */
    where: stock_itemsWhereUniqueInput
  }

  /**
   * stock_items deleteMany
   */
  export type stock_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stock_items to delete
     */
    where?: stock_itemsWhereInput
    /**
     * Limit how many stock_items to delete.
     */
    limit?: number
  }

  /**
   * stock_items.recipe_items
   */
  export type stock_items$recipe_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_items
     */
    select?: recipe_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_items
     */
    omit?: recipe_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_itemsInclude<ExtArgs> | null
    where?: recipe_itemsWhereInput
    orderBy?: recipe_itemsOrderByWithRelationInput | recipe_itemsOrderByWithRelationInput[]
    cursor?: recipe_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recipe_itemsScalarFieldEnum | Recipe_itemsScalarFieldEnum[]
  }

  /**
   * stock_items.stock_movements
   */
  export type stock_items$stock_movementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movements
     */
    select?: stock_movementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movements
     */
    omit?: stock_movementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_movementsInclude<ExtArgs> | null
    where?: stock_movementsWhereInput
    orderBy?: stock_movementsOrderByWithRelationInput | stock_movementsOrderByWithRelationInput[]
    cursor?: stock_movementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Stock_movementsScalarFieldEnum | Stock_movementsScalarFieldEnum[]
  }

  /**
   * stock_items without action
   */
  export type stock_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_items
     */
    select?: stock_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_items
     */
    omit?: stock_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_itemsInclude<ExtArgs> | null
  }


  /**
   * Model stock_movements
   */

  export type AggregateStock_movements = {
    _count: Stock_movementsCountAggregateOutputType | null
    _avg: Stock_movementsAvgAggregateOutputType | null
    _sum: Stock_movementsSumAggregateOutputType | null
    _min: Stock_movementsMinAggregateOutputType | null
    _max: Stock_movementsMaxAggregateOutputType | null
  }

  export type Stock_movementsAvgAggregateOutputType = {
    id: number | null
    stock_item_id: number | null
    quantity: Decimal | null
    related_order_id: number | null
    created_by: number | null
  }

  export type Stock_movementsSumAggregateOutputType = {
    id: number | null
    stock_item_id: number | null
    quantity: Decimal | null
    related_order_id: number | null
    created_by: number | null
  }

  export type Stock_movementsMinAggregateOutputType = {
    id: number | null
    stock_item_id: number | null
    movement_type: $Enums.stock_movement_type | null
    quantity: Decimal | null
    related_order_id: number | null
    notes: string | null
    created_at: Date | null
    created_by: number | null
  }

  export type Stock_movementsMaxAggregateOutputType = {
    id: number | null
    stock_item_id: number | null
    movement_type: $Enums.stock_movement_type | null
    quantity: Decimal | null
    related_order_id: number | null
    notes: string | null
    created_at: Date | null
    created_by: number | null
  }

  export type Stock_movementsCountAggregateOutputType = {
    id: number
    stock_item_id: number
    movement_type: number
    quantity: number
    related_order_id: number
    notes: number
    created_at: number
    created_by: number
    _all: number
  }


  export type Stock_movementsAvgAggregateInputType = {
    id?: true
    stock_item_id?: true
    quantity?: true
    related_order_id?: true
    created_by?: true
  }

  export type Stock_movementsSumAggregateInputType = {
    id?: true
    stock_item_id?: true
    quantity?: true
    related_order_id?: true
    created_by?: true
  }

  export type Stock_movementsMinAggregateInputType = {
    id?: true
    stock_item_id?: true
    movement_type?: true
    quantity?: true
    related_order_id?: true
    notes?: true
    created_at?: true
    created_by?: true
  }

  export type Stock_movementsMaxAggregateInputType = {
    id?: true
    stock_item_id?: true
    movement_type?: true
    quantity?: true
    related_order_id?: true
    notes?: true
    created_at?: true
    created_by?: true
  }

  export type Stock_movementsCountAggregateInputType = {
    id?: true
    stock_item_id?: true
    movement_type?: true
    quantity?: true
    related_order_id?: true
    notes?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type Stock_movementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stock_movements to aggregate.
     */
    where?: stock_movementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_movements to fetch.
     */
    orderBy?: stock_movementsOrderByWithRelationInput | stock_movementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stock_movementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_movements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stock_movements
    **/
    _count?: true | Stock_movementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Stock_movementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Stock_movementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stock_movementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stock_movementsMaxAggregateInputType
  }

  export type GetStock_movementsAggregateType<T extends Stock_movementsAggregateArgs> = {
        [P in keyof T & keyof AggregateStock_movements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock_movements[P]>
      : GetScalarType<T[P], AggregateStock_movements[P]>
  }




  export type stock_movementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stock_movementsWhereInput
    orderBy?: stock_movementsOrderByWithAggregationInput | stock_movementsOrderByWithAggregationInput[]
    by: Stock_movementsScalarFieldEnum[] | Stock_movementsScalarFieldEnum
    having?: stock_movementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stock_movementsCountAggregateInputType | true
    _avg?: Stock_movementsAvgAggregateInputType
    _sum?: Stock_movementsSumAggregateInputType
    _min?: Stock_movementsMinAggregateInputType
    _max?: Stock_movementsMaxAggregateInputType
  }

  export type Stock_movementsGroupByOutputType = {
    id: number
    stock_item_id: number
    movement_type: $Enums.stock_movement_type
    quantity: Decimal
    related_order_id: number | null
    notes: string | null
    created_at: Date | null
    created_by: number | null
    _count: Stock_movementsCountAggregateOutputType | null
    _avg: Stock_movementsAvgAggregateOutputType | null
    _sum: Stock_movementsSumAggregateOutputType | null
    _min: Stock_movementsMinAggregateOutputType | null
    _max: Stock_movementsMaxAggregateOutputType | null
  }

  type GetStock_movementsGroupByPayload<T extends stock_movementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stock_movementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stock_movementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stock_movementsGroupByOutputType[P]>
            : GetScalarType<T[P], Stock_movementsGroupByOutputType[P]>
        }
      >
    >


  export type stock_movementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stock_item_id?: boolean
    movement_type?: boolean
    quantity?: boolean
    related_order_id?: boolean
    notes?: boolean
    created_at?: boolean
    created_by?: boolean
    users?: boolean | stock_movements$usersArgs<ExtArgs>
    orders?: boolean | stock_movements$ordersArgs<ExtArgs>
    stock_items?: boolean | stock_itemsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock_movements"]>

  export type stock_movementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stock_item_id?: boolean
    movement_type?: boolean
    quantity?: boolean
    related_order_id?: boolean
    notes?: boolean
    created_at?: boolean
    created_by?: boolean
    users?: boolean | stock_movements$usersArgs<ExtArgs>
    orders?: boolean | stock_movements$ordersArgs<ExtArgs>
    stock_items?: boolean | stock_itemsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock_movements"]>

  export type stock_movementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stock_item_id?: boolean
    movement_type?: boolean
    quantity?: boolean
    related_order_id?: boolean
    notes?: boolean
    created_at?: boolean
    created_by?: boolean
    users?: boolean | stock_movements$usersArgs<ExtArgs>
    orders?: boolean | stock_movements$ordersArgs<ExtArgs>
    stock_items?: boolean | stock_itemsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock_movements"]>

  export type stock_movementsSelectScalar = {
    id?: boolean
    stock_item_id?: boolean
    movement_type?: boolean
    quantity?: boolean
    related_order_id?: boolean
    notes?: boolean
    created_at?: boolean
    created_by?: boolean
  }

  export type stock_movementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stock_item_id" | "movement_type" | "quantity" | "related_order_id" | "notes" | "created_at" | "created_by", ExtArgs["result"]["stock_movements"]>
  export type stock_movementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | stock_movements$usersArgs<ExtArgs>
    orders?: boolean | stock_movements$ordersArgs<ExtArgs>
    stock_items?: boolean | stock_itemsDefaultArgs<ExtArgs>
  }
  export type stock_movementsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | stock_movements$usersArgs<ExtArgs>
    orders?: boolean | stock_movements$ordersArgs<ExtArgs>
    stock_items?: boolean | stock_itemsDefaultArgs<ExtArgs>
  }
  export type stock_movementsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | stock_movements$usersArgs<ExtArgs>
    orders?: boolean | stock_movements$ordersArgs<ExtArgs>
    stock_items?: boolean | stock_itemsDefaultArgs<ExtArgs>
  }

  export type $stock_movementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stock_movements"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      orders: Prisma.$ordersPayload<ExtArgs> | null
      stock_items: Prisma.$stock_itemsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      stock_item_id: number
      movement_type: $Enums.stock_movement_type
      quantity: Prisma.Decimal
      related_order_id: number | null
      notes: string | null
      created_at: Date | null
      created_by: number | null
    }, ExtArgs["result"]["stock_movements"]>
    composites: {}
  }

  type stock_movementsGetPayload<S extends boolean | null | undefined | stock_movementsDefaultArgs> = $Result.GetResult<Prisma.$stock_movementsPayload, S>

  type stock_movementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stock_movementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stock_movementsCountAggregateInputType | true
    }

  export interface stock_movementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stock_movements'], meta: { name: 'stock_movements' } }
    /**
     * Find zero or one Stock_movements that matches the filter.
     * @param {stock_movementsFindUniqueArgs} args - Arguments to find a Stock_movements
     * @example
     * // Get one Stock_movements
     * const stock_movements = await prisma.stock_movements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stock_movementsFindUniqueArgs>(args: SelectSubset<T, stock_movementsFindUniqueArgs<ExtArgs>>): Prisma__stock_movementsClient<$Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stock_movements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stock_movementsFindUniqueOrThrowArgs} args - Arguments to find a Stock_movements
     * @example
     * // Get one Stock_movements
     * const stock_movements = await prisma.stock_movements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stock_movementsFindUniqueOrThrowArgs>(args: SelectSubset<T, stock_movementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stock_movementsClient<$Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock_movements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_movementsFindFirstArgs} args - Arguments to find a Stock_movements
     * @example
     * // Get one Stock_movements
     * const stock_movements = await prisma.stock_movements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stock_movementsFindFirstArgs>(args?: SelectSubset<T, stock_movementsFindFirstArgs<ExtArgs>>): Prisma__stock_movementsClient<$Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock_movements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_movementsFindFirstOrThrowArgs} args - Arguments to find a Stock_movements
     * @example
     * // Get one Stock_movements
     * const stock_movements = await prisma.stock_movements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stock_movementsFindFirstOrThrowArgs>(args?: SelectSubset<T, stock_movementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__stock_movementsClient<$Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stock_movements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_movementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stock_movements
     * const stock_movements = await prisma.stock_movements.findMany()
     * 
     * // Get first 10 Stock_movements
     * const stock_movements = await prisma.stock_movements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stock_movementsWithIdOnly = await prisma.stock_movements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stock_movementsFindManyArgs>(args?: SelectSubset<T, stock_movementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stock_movements.
     * @param {stock_movementsCreateArgs} args - Arguments to create a Stock_movements.
     * @example
     * // Create one Stock_movements
     * const Stock_movements = await prisma.stock_movements.create({
     *   data: {
     *     // ... data to create a Stock_movements
     *   }
     * })
     * 
     */
    create<T extends stock_movementsCreateArgs>(args: SelectSubset<T, stock_movementsCreateArgs<ExtArgs>>): Prisma__stock_movementsClient<$Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stock_movements.
     * @param {stock_movementsCreateManyArgs} args - Arguments to create many Stock_movements.
     * @example
     * // Create many Stock_movements
     * const stock_movements = await prisma.stock_movements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stock_movementsCreateManyArgs>(args?: SelectSubset<T, stock_movementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stock_movements and returns the data saved in the database.
     * @param {stock_movementsCreateManyAndReturnArgs} args - Arguments to create many Stock_movements.
     * @example
     * // Create many Stock_movements
     * const stock_movements = await prisma.stock_movements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stock_movements and only return the `id`
     * const stock_movementsWithIdOnly = await prisma.stock_movements.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stock_movementsCreateManyAndReturnArgs>(args?: SelectSubset<T, stock_movementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stock_movements.
     * @param {stock_movementsDeleteArgs} args - Arguments to delete one Stock_movements.
     * @example
     * // Delete one Stock_movements
     * const Stock_movements = await prisma.stock_movements.delete({
     *   where: {
     *     // ... filter to delete one Stock_movements
     *   }
     * })
     * 
     */
    delete<T extends stock_movementsDeleteArgs>(args: SelectSubset<T, stock_movementsDeleteArgs<ExtArgs>>): Prisma__stock_movementsClient<$Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stock_movements.
     * @param {stock_movementsUpdateArgs} args - Arguments to update one Stock_movements.
     * @example
     * // Update one Stock_movements
     * const stock_movements = await prisma.stock_movements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stock_movementsUpdateArgs>(args: SelectSubset<T, stock_movementsUpdateArgs<ExtArgs>>): Prisma__stock_movementsClient<$Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stock_movements.
     * @param {stock_movementsDeleteManyArgs} args - Arguments to filter Stock_movements to delete.
     * @example
     * // Delete a few Stock_movements
     * const { count } = await prisma.stock_movements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stock_movementsDeleteManyArgs>(args?: SelectSubset<T, stock_movementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stock_movements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_movementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stock_movements
     * const stock_movements = await prisma.stock_movements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stock_movementsUpdateManyArgs>(args: SelectSubset<T, stock_movementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stock_movements and returns the data updated in the database.
     * @param {stock_movementsUpdateManyAndReturnArgs} args - Arguments to update many Stock_movements.
     * @example
     * // Update many Stock_movements
     * const stock_movements = await prisma.stock_movements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stock_movements and only return the `id`
     * const stock_movementsWithIdOnly = await prisma.stock_movements.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends stock_movementsUpdateManyAndReturnArgs>(args: SelectSubset<T, stock_movementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stock_movements.
     * @param {stock_movementsUpsertArgs} args - Arguments to update or create a Stock_movements.
     * @example
     * // Update or create a Stock_movements
     * const stock_movements = await prisma.stock_movements.upsert({
     *   create: {
     *     // ... data to create a Stock_movements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock_movements we want to update
     *   }
     * })
     */
    upsert<T extends stock_movementsUpsertArgs>(args: SelectSubset<T, stock_movementsUpsertArgs<ExtArgs>>): Prisma__stock_movementsClient<$Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stock_movements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_movementsCountArgs} args - Arguments to filter Stock_movements to count.
     * @example
     * // Count the number of Stock_movements
     * const count = await prisma.stock_movements.count({
     *   where: {
     *     // ... the filter for the Stock_movements we want to count
     *   }
     * })
    **/
    count<T extends stock_movementsCountArgs>(
      args?: Subset<T, stock_movementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stock_movementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock_movements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stock_movementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Stock_movementsAggregateArgs>(args: Subset<T, Stock_movementsAggregateArgs>): Prisma.PrismaPromise<GetStock_movementsAggregateType<T>>

    /**
     * Group by Stock_movements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_movementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stock_movementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stock_movementsGroupByArgs['orderBy'] }
        : { orderBy?: stock_movementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stock_movementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStock_movementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stock_movements model
   */
  readonly fields: stock_movementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stock_movements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stock_movementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends stock_movements$usersArgs<ExtArgs> = {}>(args?: Subset<T, stock_movements$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends stock_movements$ordersArgs<ExtArgs> = {}>(args?: Subset<T, stock_movements$ordersArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    stock_items<T extends stock_itemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stock_itemsDefaultArgs<ExtArgs>>): Prisma__stock_itemsClient<$Result.GetResult<Prisma.$stock_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stock_movements model
   */
  interface stock_movementsFieldRefs {
    readonly id: FieldRef<"stock_movements", 'Int'>
    readonly stock_item_id: FieldRef<"stock_movements", 'Int'>
    readonly movement_type: FieldRef<"stock_movements", 'stock_movement_type'>
    readonly quantity: FieldRef<"stock_movements", 'Decimal'>
    readonly related_order_id: FieldRef<"stock_movements", 'Int'>
    readonly notes: FieldRef<"stock_movements", 'String'>
    readonly created_at: FieldRef<"stock_movements", 'DateTime'>
    readonly created_by: FieldRef<"stock_movements", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * stock_movements findUnique
   */
  export type stock_movementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movements
     */
    select?: stock_movementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movements
     */
    omit?: stock_movementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_movementsInclude<ExtArgs> | null
    /**
     * Filter, which stock_movements to fetch.
     */
    where: stock_movementsWhereUniqueInput
  }

  /**
   * stock_movements findUniqueOrThrow
   */
  export type stock_movementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movements
     */
    select?: stock_movementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movements
     */
    omit?: stock_movementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_movementsInclude<ExtArgs> | null
    /**
     * Filter, which stock_movements to fetch.
     */
    where: stock_movementsWhereUniqueInput
  }

  /**
   * stock_movements findFirst
   */
  export type stock_movementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movements
     */
    select?: stock_movementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movements
     */
    omit?: stock_movementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_movementsInclude<ExtArgs> | null
    /**
     * Filter, which stock_movements to fetch.
     */
    where?: stock_movementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_movements to fetch.
     */
    orderBy?: stock_movementsOrderByWithRelationInput | stock_movementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stock_movements.
     */
    cursor?: stock_movementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_movements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stock_movements.
     */
    distinct?: Stock_movementsScalarFieldEnum | Stock_movementsScalarFieldEnum[]
  }

  /**
   * stock_movements findFirstOrThrow
   */
  export type stock_movementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movements
     */
    select?: stock_movementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movements
     */
    omit?: stock_movementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_movementsInclude<ExtArgs> | null
    /**
     * Filter, which stock_movements to fetch.
     */
    where?: stock_movementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_movements to fetch.
     */
    orderBy?: stock_movementsOrderByWithRelationInput | stock_movementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stock_movements.
     */
    cursor?: stock_movementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_movements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stock_movements.
     */
    distinct?: Stock_movementsScalarFieldEnum | Stock_movementsScalarFieldEnum[]
  }

  /**
   * stock_movements findMany
   */
  export type stock_movementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movements
     */
    select?: stock_movementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movements
     */
    omit?: stock_movementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_movementsInclude<ExtArgs> | null
    /**
     * Filter, which stock_movements to fetch.
     */
    where?: stock_movementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_movements to fetch.
     */
    orderBy?: stock_movementsOrderByWithRelationInput | stock_movementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stock_movements.
     */
    cursor?: stock_movementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_movements.
     */
    skip?: number
    distinct?: Stock_movementsScalarFieldEnum | Stock_movementsScalarFieldEnum[]
  }

  /**
   * stock_movements create
   */
  export type stock_movementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movements
     */
    select?: stock_movementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movements
     */
    omit?: stock_movementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_movementsInclude<ExtArgs> | null
    /**
     * The data needed to create a stock_movements.
     */
    data: XOR<stock_movementsCreateInput, stock_movementsUncheckedCreateInput>
  }

  /**
   * stock_movements createMany
   */
  export type stock_movementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stock_movements.
     */
    data: stock_movementsCreateManyInput | stock_movementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stock_movements createManyAndReturn
   */
  export type stock_movementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movements
     */
    select?: stock_movementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movements
     */
    omit?: stock_movementsOmit<ExtArgs> | null
    /**
     * The data used to create many stock_movements.
     */
    data: stock_movementsCreateManyInput | stock_movementsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_movementsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * stock_movements update
   */
  export type stock_movementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movements
     */
    select?: stock_movementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movements
     */
    omit?: stock_movementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_movementsInclude<ExtArgs> | null
    /**
     * The data needed to update a stock_movements.
     */
    data: XOR<stock_movementsUpdateInput, stock_movementsUncheckedUpdateInput>
    /**
     * Choose, which stock_movements to update.
     */
    where: stock_movementsWhereUniqueInput
  }

  /**
   * stock_movements updateMany
   */
  export type stock_movementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stock_movements.
     */
    data: XOR<stock_movementsUpdateManyMutationInput, stock_movementsUncheckedUpdateManyInput>
    /**
     * Filter which stock_movements to update
     */
    where?: stock_movementsWhereInput
    /**
     * Limit how many stock_movements to update.
     */
    limit?: number
  }

  /**
   * stock_movements updateManyAndReturn
   */
  export type stock_movementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movements
     */
    select?: stock_movementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movements
     */
    omit?: stock_movementsOmit<ExtArgs> | null
    /**
     * The data used to update stock_movements.
     */
    data: XOR<stock_movementsUpdateManyMutationInput, stock_movementsUncheckedUpdateManyInput>
    /**
     * Filter which stock_movements to update
     */
    where?: stock_movementsWhereInput
    /**
     * Limit how many stock_movements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_movementsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * stock_movements upsert
   */
  export type stock_movementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movements
     */
    select?: stock_movementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movements
     */
    omit?: stock_movementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_movementsInclude<ExtArgs> | null
    /**
     * The filter to search for the stock_movements to update in case it exists.
     */
    where: stock_movementsWhereUniqueInput
    /**
     * In case the stock_movements found by the `where` argument doesn't exist, create a new stock_movements with this data.
     */
    create: XOR<stock_movementsCreateInput, stock_movementsUncheckedCreateInput>
    /**
     * In case the stock_movements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stock_movementsUpdateInput, stock_movementsUncheckedUpdateInput>
  }

  /**
   * stock_movements delete
   */
  export type stock_movementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movements
     */
    select?: stock_movementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movements
     */
    omit?: stock_movementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_movementsInclude<ExtArgs> | null
    /**
     * Filter which stock_movements to delete.
     */
    where: stock_movementsWhereUniqueInput
  }

  /**
   * stock_movements deleteMany
   */
  export type stock_movementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stock_movements to delete
     */
    where?: stock_movementsWhereInput
    /**
     * Limit how many stock_movements to delete.
     */
    limit?: number
  }

  /**
   * stock_movements.users
   */
  export type stock_movements$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * stock_movements.orders
   */
  export type stock_movements$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
  }

  /**
   * stock_movements without action
   */
  export type stock_movementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movements
     */
    select?: stock_movementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movements
     */
    omit?: stock_movementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_movementsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    full_name: string | null
    password_hash: string | null
    role: string | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    full_name: string | null
    password_hash: string | null
    role: string | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    full_name: number
    password_hash: number
    role: number
    is_active: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    full_name?: true
    password_hash?: true
    role?: true
    is_active?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    full_name?: true
    password_hash?: true
    role?: true
    is_active?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    full_name?: true
    password_hash?: true
    role?: true
    is_active?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    email: string | null
    full_name: string | null
    password_hash: string
    role: string
    is_active: boolean | null
    created_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    full_name?: boolean
    password_hash?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    expenses?: boolean | users$expensesArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    payments?: boolean | users$paymentsArgs<ExtArgs>
    stock_movements?: boolean | users$stock_movementsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    full_name?: boolean
    password_hash?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    full_name?: boolean
    password_hash?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    full_name?: boolean
    password_hash?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "full_name" | "password_hash" | "role" | "is_active" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | users$expensesArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    payments?: boolean | users$paymentsArgs<ExtArgs>
    stock_movements?: boolean | users$stock_movementsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      expenses: Prisma.$expensesPayload<ExtArgs>[]
      orders: Prisma.$ordersPayload<ExtArgs>[]
      payments: Prisma.$paymentsPayload<ExtArgs>[]
      stock_movements: Prisma.$stock_movementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string | null
      full_name: string | null
      password_hash: string
      role: string
      is_active: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expenses<T extends users$expensesArgs<ExtArgs> = {}>(args?: Subset<T, users$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends users$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, users$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stock_movements<T extends users$stock_movementsArgs<ExtArgs> = {}>(args?: Subset<T, users$stock_movementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly full_name: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly is_active: FieldRef<"users", 'Boolean'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.expenses
   */
  export type users$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    where?: expensesWhereInput
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    cursor?: expensesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * users.orders
   */
  export type users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * users.payments
   */
  export type users$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    cursor?: paymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * users.stock_movements
   */
  export type users$stock_movementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movements
     */
    select?: stock_movementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movements
     */
    omit?: stock_movementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_movementsInclude<ExtArgs> | null
    where?: stock_movementsWhereInput
    orderBy?: stock_movementsOrderByWithRelationInput | stock_movementsOrderByWithRelationInput[]
    cursor?: stock_movementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Stock_movementsScalarFieldEnum | Stock_movementsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClientsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    created_at: 'created_at'
  };

  export type ClientsScalarFieldEnum = (typeof ClientsScalarFieldEnum)[keyof typeof ClientsScalarFieldEnum]


  export const ExpensesScalarFieldEnum: {
    id: 'id',
    category: 'category',
    amount: 'amount',
    description: 'description',
    receipt_reference: 'receipt_reference',
    incurred_at: 'incurred_at',
    created_by: 'created_by'
  };

  export type ExpensesScalarFieldEnum = (typeof ExpensesScalarFieldEnum)[keyof typeof ExpensesScalarFieldEnum]


  export const Menu_categoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at'
  };

  export type Menu_categoriesScalarFieldEnum = (typeof Menu_categoriesScalarFieldEnum)[keyof typeof Menu_categoriesScalarFieldEnum]


  export const Menu_itemsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category_id: 'category_id',
    price: 'price',
    is_available: 'is_available',
    created_at: 'created_at',
    image_url: 'image_url'
  };

  export type Menu_itemsScalarFieldEnum = (typeof Menu_itemsScalarFieldEnum)[keyof typeof Menu_itemsScalarFieldEnum]


  export const Order_linesScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    menu_item_id: 'menu_item_id',
    quantity: 'quantity',
    price_at_sale: 'price_at_sale',
    line_total: 'line_total',
    created_at: 'created_at'
  };

  export type Order_linesScalarFieldEnum = (typeof Order_linesScalarFieldEnum)[keyof typeof Order_linesScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    client_id: 'client_id',
    table_number: 'table_number',
    order_type: 'order_type',
    status: 'status',
    total: 'total',
    notes: 'notes',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    method: 'method',
    amount: 'amount',
    reference: 'reference',
    paid_at: 'paid_at',
    created_by: 'created_by'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const Recipe_itemsScalarFieldEnum: {
    id: 'id',
    menu_item_id: 'menu_item_id',
    stock_item_id: 'stock_item_id',
    quantity: 'quantity'
  };

  export type Recipe_itemsScalarFieldEnum = (typeof Recipe_itemsScalarFieldEnum)[keyof typeof Recipe_itemsScalarFieldEnum]


  export const Stock_itemsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    unit: 'unit',
    quantity: 'quantity',
    min_alert_level: 'min_alert_level',
    created_at: 'created_at'
  };

  export type Stock_itemsScalarFieldEnum = (typeof Stock_itemsScalarFieldEnum)[keyof typeof Stock_itemsScalarFieldEnum]


  export const Stock_movementsScalarFieldEnum: {
    id: 'id',
    stock_item_id: 'stock_item_id',
    movement_type: 'movement_type',
    quantity: 'quantity',
    related_order_id: 'related_order_id',
    notes: 'notes',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type Stock_movementsScalarFieldEnum = (typeof Stock_movementsScalarFieldEnum)[keyof typeof Stock_movementsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    full_name: 'full_name',
    password_hash: 'password_hash',
    role: 'role',
    is_active: 'is_active',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'order_status'
   */
  export type Enumorder_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_status'>
    


  /**
   * Reference to a field of type 'order_status[]'
   */
  export type ListEnumorder_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_status[]'>
    


  /**
   * Reference to a field of type 'payment_method'
   */
  export type Enumpayment_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_method'>
    


  /**
   * Reference to a field of type 'payment_method[]'
   */
  export type ListEnumpayment_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_method[]'>
    


  /**
   * Reference to a field of type 'stock_movement_type'
   */
  export type Enumstock_movement_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'stock_movement_type'>
    


  /**
   * Reference to a field of type 'stock_movement_type[]'
   */
  export type ListEnumstock_movement_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'stock_movement_type[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type clientsWhereInput = {
    AND?: clientsWhereInput | clientsWhereInput[]
    OR?: clientsWhereInput[]
    NOT?: clientsWhereInput | clientsWhereInput[]
    id?: IntFilter<"clients"> | number
    name?: StringFilter<"clients"> | string
    phone?: StringNullableFilter<"clients"> | string | null
    email?: StringNullableFilter<"clients"> | string | null
    created_at?: DateTimeNullableFilter<"clients"> | Date | string | null
    orders?: OrdersListRelationFilter
  }

  export type clientsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    orders?: ordersOrderByRelationAggregateInput
  }

  export type clientsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: clientsWhereInput | clientsWhereInput[]
    OR?: clientsWhereInput[]
    NOT?: clientsWhereInput | clientsWhereInput[]
    name?: StringFilter<"clients"> | string
    phone?: StringNullableFilter<"clients"> | string | null
    email?: StringNullableFilter<"clients"> | string | null
    created_at?: DateTimeNullableFilter<"clients"> | Date | string | null
    orders?: OrdersListRelationFilter
  }, "id">

  export type clientsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: clientsCountOrderByAggregateInput
    _avg?: clientsAvgOrderByAggregateInput
    _max?: clientsMaxOrderByAggregateInput
    _min?: clientsMinOrderByAggregateInput
    _sum?: clientsSumOrderByAggregateInput
  }

  export type clientsScalarWhereWithAggregatesInput = {
    AND?: clientsScalarWhereWithAggregatesInput | clientsScalarWhereWithAggregatesInput[]
    OR?: clientsScalarWhereWithAggregatesInput[]
    NOT?: clientsScalarWhereWithAggregatesInput | clientsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"clients"> | number
    name?: StringWithAggregatesFilter<"clients"> | string
    phone?: StringNullableWithAggregatesFilter<"clients"> | string | null
    email?: StringNullableWithAggregatesFilter<"clients"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"clients"> | Date | string | null
  }

  export type expensesWhereInput = {
    AND?: expensesWhereInput | expensesWhereInput[]
    OR?: expensesWhereInput[]
    NOT?: expensesWhereInput | expensesWhereInput[]
    id?: IntFilter<"expenses"> | number
    category?: StringFilter<"expenses"> | string
    amount?: DecimalFilter<"expenses"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"expenses"> | string
    receipt_reference?: StringNullableFilter<"expenses"> | string | null
    incurred_at?: DateTimeNullableFilter<"expenses"> | Date | string | null
    created_by?: IntNullableFilter<"expenses"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type expensesOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    receipt_reference?: SortOrderInput | SortOrder
    incurred_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type expensesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: expensesWhereInput | expensesWhereInput[]
    OR?: expensesWhereInput[]
    NOT?: expensesWhereInput | expensesWhereInput[]
    category?: StringFilter<"expenses"> | string
    amount?: DecimalFilter<"expenses"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"expenses"> | string
    receipt_reference?: StringNullableFilter<"expenses"> | string | null
    incurred_at?: DateTimeNullableFilter<"expenses"> | Date | string | null
    created_by?: IntNullableFilter<"expenses"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type expensesOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    receipt_reference?: SortOrderInput | SortOrder
    incurred_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: expensesCountOrderByAggregateInput
    _avg?: expensesAvgOrderByAggregateInput
    _max?: expensesMaxOrderByAggregateInput
    _min?: expensesMinOrderByAggregateInput
    _sum?: expensesSumOrderByAggregateInput
  }

  export type expensesScalarWhereWithAggregatesInput = {
    AND?: expensesScalarWhereWithAggregatesInput | expensesScalarWhereWithAggregatesInput[]
    OR?: expensesScalarWhereWithAggregatesInput[]
    NOT?: expensesScalarWhereWithAggregatesInput | expensesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"expenses"> | number
    category?: StringWithAggregatesFilter<"expenses"> | string
    amount?: DecimalWithAggregatesFilter<"expenses"> | Decimal | DecimalJsLike | number | string
    description?: StringWithAggregatesFilter<"expenses"> | string
    receipt_reference?: StringNullableWithAggregatesFilter<"expenses"> | string | null
    incurred_at?: DateTimeNullableWithAggregatesFilter<"expenses"> | Date | string | null
    created_by?: IntNullableWithAggregatesFilter<"expenses"> | number | null
  }

  export type menu_categoriesWhereInput = {
    AND?: menu_categoriesWhereInput | menu_categoriesWhereInput[]
    OR?: menu_categoriesWhereInput[]
    NOT?: menu_categoriesWhereInput | menu_categoriesWhereInput[]
    id?: IntFilter<"menu_categories"> | number
    name?: StringFilter<"menu_categories"> | string
    description?: StringNullableFilter<"menu_categories"> | string | null
    created_at?: DateTimeNullableFilter<"menu_categories"> | Date | string | null
    menu_items?: Menu_itemsListRelationFilter
  }

  export type menu_categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    menu_items?: menu_itemsOrderByRelationAggregateInput
  }

  export type menu_categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: menu_categoriesWhereInput | menu_categoriesWhereInput[]
    OR?: menu_categoriesWhereInput[]
    NOT?: menu_categoriesWhereInput | menu_categoriesWhereInput[]
    description?: StringNullableFilter<"menu_categories"> | string | null
    created_at?: DateTimeNullableFilter<"menu_categories"> | Date | string | null
    menu_items?: Menu_itemsListRelationFilter
  }, "id" | "name">

  export type menu_categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: menu_categoriesCountOrderByAggregateInput
    _avg?: menu_categoriesAvgOrderByAggregateInput
    _max?: menu_categoriesMaxOrderByAggregateInput
    _min?: menu_categoriesMinOrderByAggregateInput
    _sum?: menu_categoriesSumOrderByAggregateInput
  }

  export type menu_categoriesScalarWhereWithAggregatesInput = {
    AND?: menu_categoriesScalarWhereWithAggregatesInput | menu_categoriesScalarWhereWithAggregatesInput[]
    OR?: menu_categoriesScalarWhereWithAggregatesInput[]
    NOT?: menu_categoriesScalarWhereWithAggregatesInput | menu_categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"menu_categories"> | number
    name?: StringWithAggregatesFilter<"menu_categories"> | string
    description?: StringNullableWithAggregatesFilter<"menu_categories"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"menu_categories"> | Date | string | null
  }

  export type menu_itemsWhereInput = {
    AND?: menu_itemsWhereInput | menu_itemsWhereInput[]
    OR?: menu_itemsWhereInput[]
    NOT?: menu_itemsWhereInput | menu_itemsWhereInput[]
    id?: IntFilter<"menu_items"> | number
    name?: StringFilter<"menu_items"> | string
    description?: StringNullableFilter<"menu_items"> | string | null
    category_id?: IntNullableFilter<"menu_items"> | number | null
    price?: DecimalFilter<"menu_items"> | Decimal | DecimalJsLike | number | string
    is_available?: BoolNullableFilter<"menu_items"> | boolean | null
    created_at?: DateTimeNullableFilter<"menu_items"> | Date | string | null
    image_url?: StringNullableFilter<"menu_items"> | string | null
    menu_categories?: XOR<Menu_categoriesNullableScalarRelationFilter, menu_categoriesWhereInput> | null
    order_lines?: Order_linesListRelationFilter
    recipe_items?: Recipe_itemsListRelationFilter
  }

  export type menu_itemsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    price?: SortOrder
    is_available?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    menu_categories?: menu_categoriesOrderByWithRelationInput
    order_lines?: order_linesOrderByRelationAggregateInput
    recipe_items?: recipe_itemsOrderByRelationAggregateInput
  }

  export type menu_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: menu_itemsWhereInput | menu_itemsWhereInput[]
    OR?: menu_itemsWhereInput[]
    NOT?: menu_itemsWhereInput | menu_itemsWhereInput[]
    name?: StringFilter<"menu_items"> | string
    description?: StringNullableFilter<"menu_items"> | string | null
    category_id?: IntNullableFilter<"menu_items"> | number | null
    price?: DecimalFilter<"menu_items"> | Decimal | DecimalJsLike | number | string
    is_available?: BoolNullableFilter<"menu_items"> | boolean | null
    created_at?: DateTimeNullableFilter<"menu_items"> | Date | string | null
    image_url?: StringNullableFilter<"menu_items"> | string | null
    menu_categories?: XOR<Menu_categoriesNullableScalarRelationFilter, menu_categoriesWhereInput> | null
    order_lines?: Order_linesListRelationFilter
    recipe_items?: Recipe_itemsListRelationFilter
  }, "id">

  export type menu_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    price?: SortOrder
    is_available?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    _count?: menu_itemsCountOrderByAggregateInput
    _avg?: menu_itemsAvgOrderByAggregateInput
    _max?: menu_itemsMaxOrderByAggregateInput
    _min?: menu_itemsMinOrderByAggregateInput
    _sum?: menu_itemsSumOrderByAggregateInput
  }

  export type menu_itemsScalarWhereWithAggregatesInput = {
    AND?: menu_itemsScalarWhereWithAggregatesInput | menu_itemsScalarWhereWithAggregatesInput[]
    OR?: menu_itemsScalarWhereWithAggregatesInput[]
    NOT?: menu_itemsScalarWhereWithAggregatesInput | menu_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"menu_items"> | number
    name?: StringWithAggregatesFilter<"menu_items"> | string
    description?: StringNullableWithAggregatesFilter<"menu_items"> | string | null
    category_id?: IntNullableWithAggregatesFilter<"menu_items"> | number | null
    price?: DecimalWithAggregatesFilter<"menu_items"> | Decimal | DecimalJsLike | number | string
    is_available?: BoolNullableWithAggregatesFilter<"menu_items"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"menu_items"> | Date | string | null
    image_url?: StringNullableWithAggregatesFilter<"menu_items"> | string | null
  }

  export type order_linesWhereInput = {
    AND?: order_linesWhereInput | order_linesWhereInput[]
    OR?: order_linesWhereInput[]
    NOT?: order_linesWhereInput | order_linesWhereInput[]
    id?: IntFilter<"order_lines"> | number
    order_id?: IntFilter<"order_lines"> | number
    menu_item_id?: IntFilter<"order_lines"> | number
    quantity?: IntFilter<"order_lines"> | number
    price_at_sale?: DecimalFilter<"order_lines"> | Decimal | DecimalJsLike | number | string
    line_total?: DecimalFilter<"order_lines"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"order_lines"> | Date | string | null
    menu_items?: XOR<Menu_itemsScalarRelationFilter, menu_itemsWhereInput>
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
  }

  export type order_linesOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    quantity?: SortOrder
    price_at_sale?: SortOrder
    line_total?: SortOrder
    created_at?: SortOrderInput | SortOrder
    menu_items?: menu_itemsOrderByWithRelationInput
    orders?: ordersOrderByWithRelationInput
  }

  export type order_linesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: order_linesWhereInput | order_linesWhereInput[]
    OR?: order_linesWhereInput[]
    NOT?: order_linesWhereInput | order_linesWhereInput[]
    order_id?: IntFilter<"order_lines"> | number
    menu_item_id?: IntFilter<"order_lines"> | number
    quantity?: IntFilter<"order_lines"> | number
    price_at_sale?: DecimalFilter<"order_lines"> | Decimal | DecimalJsLike | number | string
    line_total?: DecimalFilter<"order_lines"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"order_lines"> | Date | string | null
    menu_items?: XOR<Menu_itemsScalarRelationFilter, menu_itemsWhereInput>
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
  }, "id">

  export type order_linesOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    quantity?: SortOrder
    price_at_sale?: SortOrder
    line_total?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: order_linesCountOrderByAggregateInput
    _avg?: order_linesAvgOrderByAggregateInput
    _max?: order_linesMaxOrderByAggregateInput
    _min?: order_linesMinOrderByAggregateInput
    _sum?: order_linesSumOrderByAggregateInput
  }

  export type order_linesScalarWhereWithAggregatesInput = {
    AND?: order_linesScalarWhereWithAggregatesInput | order_linesScalarWhereWithAggregatesInput[]
    OR?: order_linesScalarWhereWithAggregatesInput[]
    NOT?: order_linesScalarWhereWithAggregatesInput | order_linesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order_lines"> | number
    order_id?: IntWithAggregatesFilter<"order_lines"> | number
    menu_item_id?: IntWithAggregatesFilter<"order_lines"> | number
    quantity?: IntWithAggregatesFilter<"order_lines"> | number
    price_at_sale?: DecimalWithAggregatesFilter<"order_lines"> | Decimal | DecimalJsLike | number | string
    line_total?: DecimalWithAggregatesFilter<"order_lines"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableWithAggregatesFilter<"order_lines"> | Date | string | null
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: IntFilter<"orders"> | number
    client_id?: IntNullableFilter<"orders"> | number | null
    table_number?: StringNullableFilter<"orders"> | string | null
    order_type?: StringNullableFilter<"orders"> | string | null
    status?: Enumorder_statusNullableFilter<"orders"> | $Enums.order_status | null
    total?: DecimalNullableFilter<"orders"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"orders"> | string | null
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    created_by?: IntNullableFilter<"orders"> | number | null
    order_lines?: Order_linesListRelationFilter
    clients?: XOR<ClientsNullableScalarRelationFilter, clientsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    payments?: PaymentsListRelationFilter
    stock_movements?: Stock_movementsListRelationFilter
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    client_id?: SortOrderInput | SortOrder
    table_number?: SortOrderInput | SortOrder
    order_type?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    order_lines?: order_linesOrderByRelationAggregateInput
    clients?: clientsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    payments?: paymentsOrderByRelationAggregateInput
    stock_movements?: stock_movementsOrderByRelationAggregateInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    client_id?: IntNullableFilter<"orders"> | number | null
    table_number?: StringNullableFilter<"orders"> | string | null
    order_type?: StringNullableFilter<"orders"> | string | null
    status?: Enumorder_statusNullableFilter<"orders"> | $Enums.order_status | null
    total?: DecimalNullableFilter<"orders"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"orders"> | string | null
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    created_by?: IntNullableFilter<"orders"> | number | null
    order_lines?: Order_linesListRelationFilter
    clients?: XOR<ClientsNullableScalarRelationFilter, clientsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    payments?: PaymentsListRelationFilter
    stock_movements?: Stock_movementsListRelationFilter
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    client_id?: SortOrderInput | SortOrder
    table_number?: SortOrderInput | SortOrder
    order_type?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"orders"> | number
    client_id?: IntNullableWithAggregatesFilter<"orders"> | number | null
    table_number?: StringNullableWithAggregatesFilter<"orders"> | string | null
    order_type?: StringNullableWithAggregatesFilter<"orders"> | string | null
    status?: Enumorder_statusNullableWithAggregatesFilter<"orders"> | $Enums.order_status | null
    total?: DecimalNullableWithAggregatesFilter<"orders"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableWithAggregatesFilter<"orders"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
    created_by?: IntNullableWithAggregatesFilter<"orders"> | number | null
  }

  export type paymentsWhereInput = {
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    id?: IntFilter<"payments"> | number
    order_id?: IntFilter<"payments"> | number
    method?: Enumpayment_methodFilter<"payments"> | $Enums.payment_method
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    reference?: StringNullableFilter<"payments"> | string | null
    paid_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    created_by?: IntNullableFilter<"payments"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
  }

  export type paymentsOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    reference?: SortOrderInput | SortOrder
    paid_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    orders?: ordersOrderByWithRelationInput
  }

  export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    order_id?: IntFilter<"payments"> | number
    method?: Enumpayment_methodFilter<"payments"> | $Enums.payment_method
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    reference?: StringNullableFilter<"payments"> | string | null
    paid_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    created_by?: IntNullableFilter<"payments"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
  }, "id">

  export type paymentsOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    reference?: SortOrderInput | SortOrder
    paid_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: paymentsCountOrderByAggregateInput
    _avg?: paymentsAvgOrderByAggregateInput
    _max?: paymentsMaxOrderByAggregateInput
    _min?: paymentsMinOrderByAggregateInput
    _sum?: paymentsSumOrderByAggregateInput
  }

  export type paymentsScalarWhereWithAggregatesInput = {
    AND?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    OR?: paymentsScalarWhereWithAggregatesInput[]
    NOT?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"payments"> | number
    order_id?: IntWithAggregatesFilter<"payments"> | number
    method?: Enumpayment_methodWithAggregatesFilter<"payments"> | $Enums.payment_method
    amount?: DecimalWithAggregatesFilter<"payments"> | Decimal | DecimalJsLike | number | string
    reference?: StringNullableWithAggregatesFilter<"payments"> | string | null
    paid_at?: DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null
    created_by?: IntNullableWithAggregatesFilter<"payments"> | number | null
  }

  export type recipe_itemsWhereInput = {
    AND?: recipe_itemsWhereInput | recipe_itemsWhereInput[]
    OR?: recipe_itemsWhereInput[]
    NOT?: recipe_itemsWhereInput | recipe_itemsWhereInput[]
    id?: IntFilter<"recipe_items"> | number
    menu_item_id?: IntFilter<"recipe_items"> | number
    stock_item_id?: IntFilter<"recipe_items"> | number
    quantity?: DecimalFilter<"recipe_items"> | Decimal | DecimalJsLike | number | string
    menu_items?: XOR<Menu_itemsScalarRelationFilter, menu_itemsWhereInput>
    stock_items?: XOR<Stock_itemsScalarRelationFilter, stock_itemsWhereInput>
  }

  export type recipe_itemsOrderByWithRelationInput = {
    id?: SortOrder
    menu_item_id?: SortOrder
    stock_item_id?: SortOrder
    quantity?: SortOrder
    menu_items?: menu_itemsOrderByWithRelationInput
    stock_items?: stock_itemsOrderByWithRelationInput
  }

  export type recipe_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    menu_item_id_stock_item_id?: recipe_itemsMenu_item_idStock_item_idCompoundUniqueInput
    AND?: recipe_itemsWhereInput | recipe_itemsWhereInput[]
    OR?: recipe_itemsWhereInput[]
    NOT?: recipe_itemsWhereInput | recipe_itemsWhereInput[]
    menu_item_id?: IntFilter<"recipe_items"> | number
    stock_item_id?: IntFilter<"recipe_items"> | number
    quantity?: DecimalFilter<"recipe_items"> | Decimal | DecimalJsLike | number | string
    menu_items?: XOR<Menu_itemsScalarRelationFilter, menu_itemsWhereInput>
    stock_items?: XOR<Stock_itemsScalarRelationFilter, stock_itemsWhereInput>
  }, "id" | "menu_item_id_stock_item_id">

  export type recipe_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    menu_item_id?: SortOrder
    stock_item_id?: SortOrder
    quantity?: SortOrder
    _count?: recipe_itemsCountOrderByAggregateInput
    _avg?: recipe_itemsAvgOrderByAggregateInput
    _max?: recipe_itemsMaxOrderByAggregateInput
    _min?: recipe_itemsMinOrderByAggregateInput
    _sum?: recipe_itemsSumOrderByAggregateInput
  }

  export type recipe_itemsScalarWhereWithAggregatesInput = {
    AND?: recipe_itemsScalarWhereWithAggregatesInput | recipe_itemsScalarWhereWithAggregatesInput[]
    OR?: recipe_itemsScalarWhereWithAggregatesInput[]
    NOT?: recipe_itemsScalarWhereWithAggregatesInput | recipe_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"recipe_items"> | number
    menu_item_id?: IntWithAggregatesFilter<"recipe_items"> | number
    stock_item_id?: IntWithAggregatesFilter<"recipe_items"> | number
    quantity?: DecimalWithAggregatesFilter<"recipe_items"> | Decimal | DecimalJsLike | number | string
  }

  export type stock_itemsWhereInput = {
    AND?: stock_itemsWhereInput | stock_itemsWhereInput[]
    OR?: stock_itemsWhereInput[]
    NOT?: stock_itemsWhereInput | stock_itemsWhereInput[]
    id?: IntFilter<"stock_items"> | number
    name?: StringFilter<"stock_items"> | string
    unit?: StringFilter<"stock_items"> | string
    quantity?: DecimalNullableFilter<"stock_items"> | Decimal | DecimalJsLike | number | string | null
    min_alert_level?: DecimalNullableFilter<"stock_items"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"stock_items"> | Date | string | null
    recipe_items?: Recipe_itemsListRelationFilter
    stock_movements?: Stock_movementsListRelationFilter
  }

  export type stock_itemsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    quantity?: SortOrderInput | SortOrder
    min_alert_level?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    recipe_items?: recipe_itemsOrderByRelationAggregateInput
    stock_movements?: stock_movementsOrderByRelationAggregateInput
  }

  export type stock_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: stock_itemsWhereInput | stock_itemsWhereInput[]
    OR?: stock_itemsWhereInput[]
    NOT?: stock_itemsWhereInput | stock_itemsWhereInput[]
    name?: StringFilter<"stock_items"> | string
    unit?: StringFilter<"stock_items"> | string
    quantity?: DecimalNullableFilter<"stock_items"> | Decimal | DecimalJsLike | number | string | null
    min_alert_level?: DecimalNullableFilter<"stock_items"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"stock_items"> | Date | string | null
    recipe_items?: Recipe_itemsListRelationFilter
    stock_movements?: Stock_movementsListRelationFilter
  }, "id">

  export type stock_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    quantity?: SortOrderInput | SortOrder
    min_alert_level?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: stock_itemsCountOrderByAggregateInput
    _avg?: stock_itemsAvgOrderByAggregateInput
    _max?: stock_itemsMaxOrderByAggregateInput
    _min?: stock_itemsMinOrderByAggregateInput
    _sum?: stock_itemsSumOrderByAggregateInput
  }

  export type stock_itemsScalarWhereWithAggregatesInput = {
    AND?: stock_itemsScalarWhereWithAggregatesInput | stock_itemsScalarWhereWithAggregatesInput[]
    OR?: stock_itemsScalarWhereWithAggregatesInput[]
    NOT?: stock_itemsScalarWhereWithAggregatesInput | stock_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stock_items"> | number
    name?: StringWithAggregatesFilter<"stock_items"> | string
    unit?: StringWithAggregatesFilter<"stock_items"> | string
    quantity?: DecimalNullableWithAggregatesFilter<"stock_items"> | Decimal | DecimalJsLike | number | string | null
    min_alert_level?: DecimalNullableWithAggregatesFilter<"stock_items"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"stock_items"> | Date | string | null
  }

  export type stock_movementsWhereInput = {
    AND?: stock_movementsWhereInput | stock_movementsWhereInput[]
    OR?: stock_movementsWhereInput[]
    NOT?: stock_movementsWhereInput | stock_movementsWhereInput[]
    id?: IntFilter<"stock_movements"> | number
    stock_item_id?: IntFilter<"stock_movements"> | number
    movement_type?: Enumstock_movement_typeFilter<"stock_movements"> | $Enums.stock_movement_type
    quantity?: DecimalFilter<"stock_movements"> | Decimal | DecimalJsLike | number | string
    related_order_id?: IntNullableFilter<"stock_movements"> | number | null
    notes?: StringNullableFilter<"stock_movements"> | string | null
    created_at?: DateTimeNullableFilter<"stock_movements"> | Date | string | null
    created_by?: IntNullableFilter<"stock_movements"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null
    stock_items?: XOR<Stock_itemsScalarRelationFilter, stock_itemsWhereInput>
  }

  export type stock_movementsOrderByWithRelationInput = {
    id?: SortOrder
    stock_item_id?: SortOrder
    movement_type?: SortOrder
    quantity?: SortOrder
    related_order_id?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    orders?: ordersOrderByWithRelationInput
    stock_items?: stock_itemsOrderByWithRelationInput
  }

  export type stock_movementsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: stock_movementsWhereInput | stock_movementsWhereInput[]
    OR?: stock_movementsWhereInput[]
    NOT?: stock_movementsWhereInput | stock_movementsWhereInput[]
    stock_item_id?: IntFilter<"stock_movements"> | number
    movement_type?: Enumstock_movement_typeFilter<"stock_movements"> | $Enums.stock_movement_type
    quantity?: DecimalFilter<"stock_movements"> | Decimal | DecimalJsLike | number | string
    related_order_id?: IntNullableFilter<"stock_movements"> | number | null
    notes?: StringNullableFilter<"stock_movements"> | string | null
    created_at?: DateTimeNullableFilter<"stock_movements"> | Date | string | null
    created_by?: IntNullableFilter<"stock_movements"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null
    stock_items?: XOR<Stock_itemsScalarRelationFilter, stock_itemsWhereInput>
  }, "id">

  export type stock_movementsOrderByWithAggregationInput = {
    id?: SortOrder
    stock_item_id?: SortOrder
    movement_type?: SortOrder
    quantity?: SortOrder
    related_order_id?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: stock_movementsCountOrderByAggregateInput
    _avg?: stock_movementsAvgOrderByAggregateInput
    _max?: stock_movementsMaxOrderByAggregateInput
    _min?: stock_movementsMinOrderByAggregateInput
    _sum?: stock_movementsSumOrderByAggregateInput
  }

  export type stock_movementsScalarWhereWithAggregatesInput = {
    AND?: stock_movementsScalarWhereWithAggregatesInput | stock_movementsScalarWhereWithAggregatesInput[]
    OR?: stock_movementsScalarWhereWithAggregatesInput[]
    NOT?: stock_movementsScalarWhereWithAggregatesInput | stock_movementsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stock_movements"> | number
    stock_item_id?: IntWithAggregatesFilter<"stock_movements"> | number
    movement_type?: Enumstock_movement_typeWithAggregatesFilter<"stock_movements"> | $Enums.stock_movement_type
    quantity?: DecimalWithAggregatesFilter<"stock_movements"> | Decimal | DecimalJsLike | number | string
    related_order_id?: IntNullableWithAggregatesFilter<"stock_movements"> | number | null
    notes?: StringNullableWithAggregatesFilter<"stock_movements"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"stock_movements"> | Date | string | null
    created_by?: IntNullableWithAggregatesFilter<"stock_movements"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    email?: StringNullableFilter<"users"> | string | null
    full_name?: StringNullableFilter<"users"> | string | null
    password_hash?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    is_active?: BoolNullableFilter<"users"> | boolean | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    expenses?: ExpensesListRelationFilter
    orders?: OrdersListRelationFilter
    payments?: PaymentsListRelationFilter
    stock_movements?: Stock_movementsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    full_name?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    expenses?: expensesOrderByRelationAggregateInput
    orders?: ordersOrderByRelationAggregateInput
    payments?: paymentsOrderByRelationAggregateInput
    stock_movements?: stock_movementsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    full_name?: StringNullableFilter<"users"> | string | null
    password_hash?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    is_active?: BoolNullableFilter<"users"> | boolean | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    expenses?: ExpensesListRelationFilter
    orders?: OrdersListRelationFilter
    payments?: PaymentsListRelationFilter
    stock_movements?: Stock_movementsListRelationFilter
  }, "id" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    full_name?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    full_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    password_hash?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
    is_active?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type clientsCreateInput = {
    name: string
    phone?: string | null
    email?: string | null
    created_at?: Date | string | null
    orders?: ordersCreateNestedManyWithoutClientsInput
  }

  export type clientsUncheckedCreateInput = {
    id?: number
    name: string
    phone?: string | null
    email?: string | null
    created_at?: Date | string | null
    orders?: ordersUncheckedCreateNestedManyWithoutClientsInput
  }

  export type clientsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateManyWithoutClientsNestedInput
  }

  export type clientsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type clientsCreateManyInput = {
    id?: number
    name: string
    phone?: string | null
    email?: string | null
    created_at?: Date | string | null
  }

  export type clientsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clientsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type expensesCreateInput = {
    category: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    receipt_reference?: string | null
    incurred_at?: Date | string | null
    users?: usersCreateNestedOneWithoutExpensesInput
  }

  export type expensesUncheckedCreateInput = {
    id?: number
    category: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    receipt_reference?: string | null
    incurred_at?: Date | string | null
    created_by?: number | null
  }

  export type expensesUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    receipt_reference?: NullableStringFieldUpdateOperationsInput | string | null
    incurred_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutExpensesNestedInput
  }

  export type expensesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    receipt_reference?: NullableStringFieldUpdateOperationsInput | string | null
    incurred_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type expensesCreateManyInput = {
    id?: number
    category: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    receipt_reference?: string | null
    incurred_at?: Date | string | null
    created_by?: number | null
  }

  export type expensesUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    receipt_reference?: NullableStringFieldUpdateOperationsInput | string | null
    incurred_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type expensesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    receipt_reference?: NullableStringFieldUpdateOperationsInput | string | null
    incurred_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type menu_categoriesCreateInput = {
    name: string
    description?: string | null
    created_at?: Date | string | null
    menu_items?: menu_itemsCreateNestedManyWithoutMenu_categoriesInput
  }

  export type menu_categoriesUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    menu_items?: menu_itemsUncheckedCreateNestedManyWithoutMenu_categoriesInput
  }

  export type menu_categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    menu_items?: menu_itemsUpdateManyWithoutMenu_categoriesNestedInput
  }

  export type menu_categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    menu_items?: menu_itemsUncheckedUpdateManyWithoutMenu_categoriesNestedInput
  }

  export type menu_categoriesCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
  }

  export type menu_categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type menu_categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type menu_itemsCreateInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    is_available?: boolean | null
    created_at?: Date | string | null
    image_url?: string | null
    menu_categories?: menu_categoriesCreateNestedOneWithoutMenu_itemsInput
    order_lines?: order_linesCreateNestedManyWithoutMenu_itemsInput
    recipe_items?: recipe_itemsCreateNestedManyWithoutMenu_itemsInput
  }

  export type menu_itemsUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    category_id?: number | null
    price: Decimal | DecimalJsLike | number | string
    is_available?: boolean | null
    created_at?: Date | string | null
    image_url?: string | null
    order_lines?: order_linesUncheckedCreateNestedManyWithoutMenu_itemsInput
    recipe_items?: recipe_itemsUncheckedCreateNestedManyWithoutMenu_itemsInput
  }

  export type menu_itemsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    menu_categories?: menu_categoriesUpdateOneWithoutMenu_itemsNestedInput
    order_lines?: order_linesUpdateManyWithoutMenu_itemsNestedInput
    recipe_items?: recipe_itemsUpdateManyWithoutMenu_itemsNestedInput
  }

  export type menu_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    order_lines?: order_linesUncheckedUpdateManyWithoutMenu_itemsNestedInput
    recipe_items?: recipe_itemsUncheckedUpdateManyWithoutMenu_itemsNestedInput
  }

  export type menu_itemsCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    category_id?: number | null
    price: Decimal | DecimalJsLike | number | string
    is_available?: boolean | null
    created_at?: Date | string | null
    image_url?: string | null
  }

  export type menu_itemsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type menu_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type order_linesCreateInput = {
    quantity: number
    price_at_sale: Decimal | DecimalJsLike | number | string
    line_total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    menu_items: menu_itemsCreateNestedOneWithoutOrder_linesInput
    orders: ordersCreateNestedOneWithoutOrder_linesInput
  }

  export type order_linesUncheckedCreateInput = {
    id?: number
    order_id: number
    menu_item_id: number
    quantity: number
    price_at_sale: Decimal | DecimalJsLike | number | string
    line_total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type order_linesUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price_at_sale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    line_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    menu_items?: menu_itemsUpdateOneRequiredWithoutOrder_linesNestedInput
    orders?: ordersUpdateOneRequiredWithoutOrder_linesNestedInput
  }

  export type order_linesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    menu_item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price_at_sale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    line_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_linesCreateManyInput = {
    id?: number
    order_id: number
    menu_item_id: number
    quantity: number
    price_at_sale: Decimal | DecimalJsLike | number | string
    line_total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type order_linesUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price_at_sale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    line_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_linesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    menu_item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price_at_sale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    line_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersCreateInput = {
    table_number?: string | null
    order_type?: string | null
    status?: $Enums.order_status | null
    total?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    created_at?: Date | string | null
    order_lines?: order_linesCreateNestedManyWithoutOrdersInput
    clients?: clientsCreateNestedOneWithoutOrdersInput
    users?: usersCreateNestedOneWithoutOrdersInput
    payments?: paymentsCreateNestedManyWithoutOrdersInput
    stock_movements?: stock_movementsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id?: number
    client_id?: number | null
    table_number?: string | null
    order_type?: string | null
    status?: $Enums.order_status | null
    total?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    order_lines?: order_linesUncheckedCreateNestedManyWithoutOrdersInput
    payments?: paymentsUncheckedCreateNestedManyWithoutOrdersInput
    stock_movements?: stock_movementsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    table_number?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorder_statusFieldUpdateOperationsInput | $Enums.order_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_lines?: order_linesUpdateManyWithoutOrdersNestedInput
    clients?: clientsUpdateOneWithoutOrdersNestedInput
    users?: usersUpdateOneWithoutOrdersNestedInput
    payments?: paymentsUpdateManyWithoutOrdersNestedInput
    stock_movements?: stock_movementsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_number?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorder_statusFieldUpdateOperationsInput | $Enums.order_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    order_lines?: order_linesUncheckedUpdateManyWithoutOrdersNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutOrdersNestedInput
    stock_movements?: stock_movementsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    id?: number
    client_id?: number | null
    table_number?: string | null
    order_type?: string | null
    status?: $Enums.order_status | null
    total?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    created_at?: Date | string | null
    created_by?: number | null
  }

  export type ordersUpdateManyMutationInput = {
    table_number?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorder_statusFieldUpdateOperationsInput | $Enums.order_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_number?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorder_statusFieldUpdateOperationsInput | $Enums.order_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type paymentsCreateInput = {
    method: $Enums.payment_method
    amount: Decimal | DecimalJsLike | number | string
    reference?: string | null
    paid_at?: Date | string | null
    users?: usersCreateNestedOneWithoutPaymentsInput
    orders: ordersCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUncheckedCreateInput = {
    id?: number
    order_id: number
    method: $Enums.payment_method
    amount: Decimal | DecimalJsLike | number | string
    reference?: string | null
    paid_at?: Date | string | null
    created_by?: number | null
  }

  export type paymentsUpdateInput = {
    method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutPaymentsNestedInput
    orders?: ordersUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type paymentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type paymentsCreateManyInput = {
    id?: number
    order_id: number
    method: $Enums.payment_method
    amount: Decimal | DecimalJsLike | number | string
    reference?: string | null
    paid_at?: Date | string | null
    created_by?: number | null
  }

  export type paymentsUpdateManyMutationInput = {
    method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type recipe_itemsCreateInput = {
    quantity: Decimal | DecimalJsLike | number | string
    menu_items: menu_itemsCreateNestedOneWithoutRecipe_itemsInput
    stock_items: stock_itemsCreateNestedOneWithoutRecipe_itemsInput
  }

  export type recipe_itemsUncheckedCreateInput = {
    id?: number
    menu_item_id: number
    stock_item_id: number
    quantity: Decimal | DecimalJsLike | number | string
  }

  export type recipe_itemsUpdateInput = {
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menu_items?: menu_itemsUpdateOneRequiredWithoutRecipe_itemsNestedInput
    stock_items?: stock_itemsUpdateOneRequiredWithoutRecipe_itemsNestedInput
  }

  export type recipe_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_item_id?: IntFieldUpdateOperationsInput | number
    stock_item_id?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type recipe_itemsCreateManyInput = {
    id?: number
    menu_item_id: number
    stock_item_id: number
    quantity: Decimal | DecimalJsLike | number | string
  }

  export type recipe_itemsUpdateManyMutationInput = {
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type recipe_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_item_id?: IntFieldUpdateOperationsInput | number
    stock_item_id?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type stock_itemsCreateInput = {
    name: string
    unit: string
    quantity?: Decimal | DecimalJsLike | number | string | null
    min_alert_level?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    recipe_items?: recipe_itemsCreateNestedManyWithoutStock_itemsInput
    stock_movements?: stock_movementsCreateNestedManyWithoutStock_itemsInput
  }

  export type stock_itemsUncheckedCreateInput = {
    id?: number
    name: string
    unit: string
    quantity?: Decimal | DecimalJsLike | number | string | null
    min_alert_level?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    recipe_items?: recipe_itemsUncheckedCreateNestedManyWithoutStock_itemsInput
    stock_movements?: stock_movementsUncheckedCreateNestedManyWithoutStock_itemsInput
  }

  export type stock_itemsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_alert_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipe_items?: recipe_itemsUpdateManyWithoutStock_itemsNestedInput
    stock_movements?: stock_movementsUpdateManyWithoutStock_itemsNestedInput
  }

  export type stock_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_alert_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipe_items?: recipe_itemsUncheckedUpdateManyWithoutStock_itemsNestedInput
    stock_movements?: stock_movementsUncheckedUpdateManyWithoutStock_itemsNestedInput
  }

  export type stock_itemsCreateManyInput = {
    id?: number
    name: string
    unit: string
    quantity?: Decimal | DecimalJsLike | number | string | null
    min_alert_level?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type stock_itemsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_alert_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stock_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_alert_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stock_movementsCreateInput = {
    movement_type: $Enums.stock_movement_type
    quantity: Decimal | DecimalJsLike | number | string
    notes?: string | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutStock_movementsInput
    orders?: ordersCreateNestedOneWithoutStock_movementsInput
    stock_items: stock_itemsCreateNestedOneWithoutStock_movementsInput
  }

  export type stock_movementsUncheckedCreateInput = {
    id?: number
    stock_item_id: number
    movement_type: $Enums.stock_movement_type
    quantity: Decimal | DecimalJsLike | number | string
    related_order_id?: number | null
    notes?: string | null
    created_at?: Date | string | null
    created_by?: number | null
  }

  export type stock_movementsUpdateInput = {
    movement_type?: Enumstock_movement_typeFieldUpdateOperationsInput | $Enums.stock_movement_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutStock_movementsNestedInput
    orders?: ordersUpdateOneWithoutStock_movementsNestedInput
    stock_items?: stock_itemsUpdateOneRequiredWithoutStock_movementsNestedInput
  }

  export type stock_movementsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    stock_item_id?: IntFieldUpdateOperationsInput | number
    movement_type?: Enumstock_movement_typeFieldUpdateOperationsInput | $Enums.stock_movement_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    related_order_id?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type stock_movementsCreateManyInput = {
    id?: number
    stock_item_id: number
    movement_type: $Enums.stock_movement_type
    quantity: Decimal | DecimalJsLike | number | string
    related_order_id?: number | null
    notes?: string | null
    created_at?: Date | string | null
    created_by?: number | null
  }

  export type stock_movementsUpdateManyMutationInput = {
    movement_type?: Enumstock_movement_typeFieldUpdateOperationsInput | $Enums.stock_movement_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stock_movementsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    stock_item_id?: IntFieldUpdateOperationsInput | number
    movement_type?: Enumstock_movement_typeFieldUpdateOperationsInput | $Enums.stock_movement_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    related_order_id?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    username: string
    email?: string | null
    full_name?: string | null
    password_hash: string
    role?: string
    is_active?: boolean | null
    created_at?: Date | string | null
    expenses?: expensesCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
    payments?: paymentsCreateNestedManyWithoutUsersInput
    stock_movements?: stock_movementsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    email?: string | null
    full_name?: string | null
    password_hash: string
    role?: string
    is_active?: boolean | null
    created_at?: Date | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    payments?: paymentsUncheckedCreateNestedManyWithoutUsersInput
    stock_movements?: stock_movementsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
    payments?: paymentsUpdateManyWithoutUsersNestedInput
    stock_movements?: stock_movementsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutUsersNestedInput
    stock_movements?: stock_movementsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    email?: string | null
    full_name?: string | null
    password_hash: string
    role?: string
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clientsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type clientsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type clientsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type clientsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type clientsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type expensesCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    receipt_reference?: SortOrder
    incurred_at?: SortOrder
    created_by?: SortOrder
  }

  export type expensesAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    created_by?: SortOrder
  }

  export type expensesMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    receipt_reference?: SortOrder
    incurred_at?: SortOrder
    created_by?: SortOrder
  }

  export type expensesMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    receipt_reference?: SortOrder
    incurred_at?: SortOrder
    created_by?: SortOrder
  }

  export type expensesSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    created_by?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Menu_itemsListRelationFilter = {
    every?: menu_itemsWhereInput
    some?: menu_itemsWhereInput
    none?: menu_itemsWhereInput
  }

  export type menu_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type menu_categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type menu_categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type menu_categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type menu_categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type menu_categoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Menu_categoriesNullableScalarRelationFilter = {
    is?: menu_categoriesWhereInput | null
    isNot?: menu_categoriesWhereInput | null
  }

  export type Order_linesListRelationFilter = {
    every?: order_linesWhereInput
    some?: order_linesWhereInput
    none?: order_linesWhereInput
  }

  export type Recipe_itemsListRelationFilter = {
    every?: recipe_itemsWhereInput
    some?: recipe_itemsWhereInput
    none?: recipe_itemsWhereInput
  }

  export type order_linesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type recipe_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type menu_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    price?: SortOrder
    is_available?: SortOrder
    created_at?: SortOrder
    image_url?: SortOrder
  }

  export type menu_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    price?: SortOrder
  }

  export type menu_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    price?: SortOrder
    is_available?: SortOrder
    created_at?: SortOrder
    image_url?: SortOrder
  }

  export type menu_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    price?: SortOrder
    is_available?: SortOrder
    created_at?: SortOrder
    image_url?: SortOrder
  }

  export type menu_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    price?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Menu_itemsScalarRelationFilter = {
    is?: menu_itemsWhereInput
    isNot?: menu_itemsWhereInput
  }

  export type OrdersScalarRelationFilter = {
    is?: ordersWhereInput
    isNot?: ordersWhereInput
  }

  export type order_linesCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    quantity?: SortOrder
    price_at_sale?: SortOrder
    line_total?: SortOrder
    created_at?: SortOrder
  }

  export type order_linesAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    quantity?: SortOrder
    price_at_sale?: SortOrder
    line_total?: SortOrder
  }

  export type order_linesMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    quantity?: SortOrder
    price_at_sale?: SortOrder
    line_total?: SortOrder
    created_at?: SortOrder
  }

  export type order_linesMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    quantity?: SortOrder
    price_at_sale?: SortOrder
    line_total?: SortOrder
    created_at?: SortOrder
  }

  export type order_linesSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    quantity?: SortOrder
    price_at_sale?: SortOrder
    line_total?: SortOrder
  }

  export type Enumorder_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumorder_statusNullableFilter<$PrismaModel> | $Enums.order_status | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ClientsNullableScalarRelationFilter = {
    is?: clientsWhereInput | null
    isNot?: clientsWhereInput | null
  }

  export type PaymentsListRelationFilter = {
    every?: paymentsWhereInput
    some?: paymentsWhereInput
    none?: paymentsWhereInput
  }

  export type Stock_movementsListRelationFilter = {
    every?: stock_movementsWhereInput
    some?: stock_movementsWhereInput
    none?: stock_movementsWhereInput
  }

  export type paymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type stock_movementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    table_number?: SortOrder
    order_type?: SortOrder
    status?: SortOrder
    total?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    total?: SortOrder
    created_by?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    table_number?: SortOrder
    order_type?: SortOrder
    status?: SortOrder
    total?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    table_number?: SortOrder
    order_type?: SortOrder
    status?: SortOrder
    total?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    total?: SortOrder
    created_by?: SortOrder
  }

  export type Enumorder_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumorder_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.order_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumorder_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumorder_statusNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Enumpayment_methodFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_methodFilter<$PrismaModel> | $Enums.payment_method
  }

  export type paymentsCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    paid_at?: SortOrder
    created_by?: SortOrder
  }

  export type paymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    created_by?: SortOrder
  }

  export type paymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    paid_at?: SortOrder
    created_by?: SortOrder
  }

  export type paymentsMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    paid_at?: SortOrder
    created_by?: SortOrder
  }

  export type paymentsSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    created_by?: SortOrder
  }

  export type Enumpayment_methodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_methodWithAggregatesFilter<$PrismaModel> | $Enums.payment_method
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_methodFilter<$PrismaModel>
    _max?: NestedEnumpayment_methodFilter<$PrismaModel>
  }

  export type Stock_itemsScalarRelationFilter = {
    is?: stock_itemsWhereInput
    isNot?: stock_itemsWhereInput
  }

  export type recipe_itemsMenu_item_idStock_item_idCompoundUniqueInput = {
    menu_item_id: number
    stock_item_id: number
  }

  export type recipe_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    menu_item_id?: SortOrder
    stock_item_id?: SortOrder
    quantity?: SortOrder
  }

  export type recipe_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    menu_item_id?: SortOrder
    stock_item_id?: SortOrder
    quantity?: SortOrder
  }

  export type recipe_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    menu_item_id?: SortOrder
    stock_item_id?: SortOrder
    quantity?: SortOrder
  }

  export type recipe_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    menu_item_id?: SortOrder
    stock_item_id?: SortOrder
    quantity?: SortOrder
  }

  export type recipe_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    menu_item_id?: SortOrder
    stock_item_id?: SortOrder
    quantity?: SortOrder
  }

  export type stock_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    min_alert_level?: SortOrder
    created_at?: SortOrder
  }

  export type stock_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    min_alert_level?: SortOrder
  }

  export type stock_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    min_alert_level?: SortOrder
    created_at?: SortOrder
  }

  export type stock_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    min_alert_level?: SortOrder
    created_at?: SortOrder
  }

  export type stock_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    min_alert_level?: SortOrder
  }

  export type Enumstock_movement_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.stock_movement_type | Enumstock_movement_typeFieldRefInput<$PrismaModel>
    in?: $Enums.stock_movement_type[] | ListEnumstock_movement_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.stock_movement_type[] | ListEnumstock_movement_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumstock_movement_typeFilter<$PrismaModel> | $Enums.stock_movement_type
  }

  export type OrdersNullableScalarRelationFilter = {
    is?: ordersWhereInput | null
    isNot?: ordersWhereInput | null
  }

  export type stock_movementsCountOrderByAggregateInput = {
    id?: SortOrder
    stock_item_id?: SortOrder
    movement_type?: SortOrder
    quantity?: SortOrder
    related_order_id?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type stock_movementsAvgOrderByAggregateInput = {
    id?: SortOrder
    stock_item_id?: SortOrder
    quantity?: SortOrder
    related_order_id?: SortOrder
    created_by?: SortOrder
  }

  export type stock_movementsMaxOrderByAggregateInput = {
    id?: SortOrder
    stock_item_id?: SortOrder
    movement_type?: SortOrder
    quantity?: SortOrder
    related_order_id?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type stock_movementsMinOrderByAggregateInput = {
    id?: SortOrder
    stock_item_id?: SortOrder
    movement_type?: SortOrder
    quantity?: SortOrder
    related_order_id?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type stock_movementsSumOrderByAggregateInput = {
    id?: SortOrder
    stock_item_id?: SortOrder
    quantity?: SortOrder
    related_order_id?: SortOrder
    created_by?: SortOrder
  }

  export type Enumstock_movement_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.stock_movement_type | Enumstock_movement_typeFieldRefInput<$PrismaModel>
    in?: $Enums.stock_movement_type[] | ListEnumstock_movement_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.stock_movement_type[] | ListEnumstock_movement_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumstock_movement_typeWithAggregatesFilter<$PrismaModel> | $Enums.stock_movement_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstock_movement_typeFilter<$PrismaModel>
    _max?: NestedEnumstock_movement_typeFilter<$PrismaModel>
  }

  export type ExpensesListRelationFilter = {
    every?: expensesWhereInput
    some?: expensesWhereInput
    none?: expensesWhereInput
  }

  export type expensesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ordersCreateNestedManyWithoutClientsInput = {
    create?: XOR<ordersCreateWithoutClientsInput, ordersUncheckedCreateWithoutClientsInput> | ordersCreateWithoutClientsInput[] | ordersUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutClientsInput | ordersCreateOrConnectWithoutClientsInput[]
    createMany?: ordersCreateManyClientsInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<ordersCreateWithoutClientsInput, ordersUncheckedCreateWithoutClientsInput> | ordersCreateWithoutClientsInput[] | ordersUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutClientsInput | ordersCreateOrConnectWithoutClientsInput[]
    createMany?: ordersCreateManyClientsInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ordersUpdateManyWithoutClientsNestedInput = {
    create?: XOR<ordersCreateWithoutClientsInput, ordersUncheckedCreateWithoutClientsInput> | ordersCreateWithoutClientsInput[] | ordersUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutClientsInput | ordersCreateOrConnectWithoutClientsInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutClientsInput | ordersUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: ordersCreateManyClientsInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutClientsInput | ordersUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutClientsInput | ordersUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ordersUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<ordersCreateWithoutClientsInput, ordersUncheckedCreateWithoutClientsInput> | ordersCreateWithoutClientsInput[] | ordersUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutClientsInput | ordersCreateOrConnectWithoutClientsInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutClientsInput | ordersUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: ordersCreateManyClientsInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutClientsInput | ordersUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutClientsInput | ordersUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutExpensesInput = {
    create?: XOR<usersCreateWithoutExpensesInput, usersUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: usersCreateOrConnectWithoutExpensesInput
    connect?: usersWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type usersUpdateOneWithoutExpensesNestedInput = {
    create?: XOR<usersCreateWithoutExpensesInput, usersUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: usersCreateOrConnectWithoutExpensesInput
    upsert?: usersUpsertWithoutExpensesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutExpensesInput, usersUpdateWithoutExpensesInput>, usersUncheckedUpdateWithoutExpensesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type menu_itemsCreateNestedManyWithoutMenu_categoriesInput = {
    create?: XOR<menu_itemsCreateWithoutMenu_categoriesInput, menu_itemsUncheckedCreateWithoutMenu_categoriesInput> | menu_itemsCreateWithoutMenu_categoriesInput[] | menu_itemsUncheckedCreateWithoutMenu_categoriesInput[]
    connectOrCreate?: menu_itemsCreateOrConnectWithoutMenu_categoriesInput | menu_itemsCreateOrConnectWithoutMenu_categoriesInput[]
    createMany?: menu_itemsCreateManyMenu_categoriesInputEnvelope
    connect?: menu_itemsWhereUniqueInput | menu_itemsWhereUniqueInput[]
  }

  export type menu_itemsUncheckedCreateNestedManyWithoutMenu_categoriesInput = {
    create?: XOR<menu_itemsCreateWithoutMenu_categoriesInput, menu_itemsUncheckedCreateWithoutMenu_categoriesInput> | menu_itemsCreateWithoutMenu_categoriesInput[] | menu_itemsUncheckedCreateWithoutMenu_categoriesInput[]
    connectOrCreate?: menu_itemsCreateOrConnectWithoutMenu_categoriesInput | menu_itemsCreateOrConnectWithoutMenu_categoriesInput[]
    createMany?: menu_itemsCreateManyMenu_categoriesInputEnvelope
    connect?: menu_itemsWhereUniqueInput | menu_itemsWhereUniqueInput[]
  }

  export type menu_itemsUpdateManyWithoutMenu_categoriesNestedInput = {
    create?: XOR<menu_itemsCreateWithoutMenu_categoriesInput, menu_itemsUncheckedCreateWithoutMenu_categoriesInput> | menu_itemsCreateWithoutMenu_categoriesInput[] | menu_itemsUncheckedCreateWithoutMenu_categoriesInput[]
    connectOrCreate?: menu_itemsCreateOrConnectWithoutMenu_categoriesInput | menu_itemsCreateOrConnectWithoutMenu_categoriesInput[]
    upsert?: menu_itemsUpsertWithWhereUniqueWithoutMenu_categoriesInput | menu_itemsUpsertWithWhereUniqueWithoutMenu_categoriesInput[]
    createMany?: menu_itemsCreateManyMenu_categoriesInputEnvelope
    set?: menu_itemsWhereUniqueInput | menu_itemsWhereUniqueInput[]
    disconnect?: menu_itemsWhereUniqueInput | menu_itemsWhereUniqueInput[]
    delete?: menu_itemsWhereUniqueInput | menu_itemsWhereUniqueInput[]
    connect?: menu_itemsWhereUniqueInput | menu_itemsWhereUniqueInput[]
    update?: menu_itemsUpdateWithWhereUniqueWithoutMenu_categoriesInput | menu_itemsUpdateWithWhereUniqueWithoutMenu_categoriesInput[]
    updateMany?: menu_itemsUpdateManyWithWhereWithoutMenu_categoriesInput | menu_itemsUpdateManyWithWhereWithoutMenu_categoriesInput[]
    deleteMany?: menu_itemsScalarWhereInput | menu_itemsScalarWhereInput[]
  }

  export type menu_itemsUncheckedUpdateManyWithoutMenu_categoriesNestedInput = {
    create?: XOR<menu_itemsCreateWithoutMenu_categoriesInput, menu_itemsUncheckedCreateWithoutMenu_categoriesInput> | menu_itemsCreateWithoutMenu_categoriesInput[] | menu_itemsUncheckedCreateWithoutMenu_categoriesInput[]
    connectOrCreate?: menu_itemsCreateOrConnectWithoutMenu_categoriesInput | menu_itemsCreateOrConnectWithoutMenu_categoriesInput[]
    upsert?: menu_itemsUpsertWithWhereUniqueWithoutMenu_categoriesInput | menu_itemsUpsertWithWhereUniqueWithoutMenu_categoriesInput[]
    createMany?: menu_itemsCreateManyMenu_categoriesInputEnvelope
    set?: menu_itemsWhereUniqueInput | menu_itemsWhereUniqueInput[]
    disconnect?: menu_itemsWhereUniqueInput | menu_itemsWhereUniqueInput[]
    delete?: menu_itemsWhereUniqueInput | menu_itemsWhereUniqueInput[]
    connect?: menu_itemsWhereUniqueInput | menu_itemsWhereUniqueInput[]
    update?: menu_itemsUpdateWithWhereUniqueWithoutMenu_categoriesInput | menu_itemsUpdateWithWhereUniqueWithoutMenu_categoriesInput[]
    updateMany?: menu_itemsUpdateManyWithWhereWithoutMenu_categoriesInput | menu_itemsUpdateManyWithWhereWithoutMenu_categoriesInput[]
    deleteMany?: menu_itemsScalarWhereInput | menu_itemsScalarWhereInput[]
  }

  export type menu_categoriesCreateNestedOneWithoutMenu_itemsInput = {
    create?: XOR<menu_categoriesCreateWithoutMenu_itemsInput, menu_categoriesUncheckedCreateWithoutMenu_itemsInput>
    connectOrCreate?: menu_categoriesCreateOrConnectWithoutMenu_itemsInput
    connect?: menu_categoriesWhereUniqueInput
  }

  export type order_linesCreateNestedManyWithoutMenu_itemsInput = {
    create?: XOR<order_linesCreateWithoutMenu_itemsInput, order_linesUncheckedCreateWithoutMenu_itemsInput> | order_linesCreateWithoutMenu_itemsInput[] | order_linesUncheckedCreateWithoutMenu_itemsInput[]
    connectOrCreate?: order_linesCreateOrConnectWithoutMenu_itemsInput | order_linesCreateOrConnectWithoutMenu_itemsInput[]
    createMany?: order_linesCreateManyMenu_itemsInputEnvelope
    connect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
  }

  export type recipe_itemsCreateNestedManyWithoutMenu_itemsInput = {
    create?: XOR<recipe_itemsCreateWithoutMenu_itemsInput, recipe_itemsUncheckedCreateWithoutMenu_itemsInput> | recipe_itemsCreateWithoutMenu_itemsInput[] | recipe_itemsUncheckedCreateWithoutMenu_itemsInput[]
    connectOrCreate?: recipe_itemsCreateOrConnectWithoutMenu_itemsInput | recipe_itemsCreateOrConnectWithoutMenu_itemsInput[]
    createMany?: recipe_itemsCreateManyMenu_itemsInputEnvelope
    connect?: recipe_itemsWhereUniqueInput | recipe_itemsWhereUniqueInput[]
  }

  export type order_linesUncheckedCreateNestedManyWithoutMenu_itemsInput = {
    create?: XOR<order_linesCreateWithoutMenu_itemsInput, order_linesUncheckedCreateWithoutMenu_itemsInput> | order_linesCreateWithoutMenu_itemsInput[] | order_linesUncheckedCreateWithoutMenu_itemsInput[]
    connectOrCreate?: order_linesCreateOrConnectWithoutMenu_itemsInput | order_linesCreateOrConnectWithoutMenu_itemsInput[]
    createMany?: order_linesCreateManyMenu_itemsInputEnvelope
    connect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
  }

  export type recipe_itemsUncheckedCreateNestedManyWithoutMenu_itemsInput = {
    create?: XOR<recipe_itemsCreateWithoutMenu_itemsInput, recipe_itemsUncheckedCreateWithoutMenu_itemsInput> | recipe_itemsCreateWithoutMenu_itemsInput[] | recipe_itemsUncheckedCreateWithoutMenu_itemsInput[]
    connectOrCreate?: recipe_itemsCreateOrConnectWithoutMenu_itemsInput | recipe_itemsCreateOrConnectWithoutMenu_itemsInput[]
    createMany?: recipe_itemsCreateManyMenu_itemsInputEnvelope
    connect?: recipe_itemsWhereUniqueInput | recipe_itemsWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type menu_categoriesUpdateOneWithoutMenu_itemsNestedInput = {
    create?: XOR<menu_categoriesCreateWithoutMenu_itemsInput, menu_categoriesUncheckedCreateWithoutMenu_itemsInput>
    connectOrCreate?: menu_categoriesCreateOrConnectWithoutMenu_itemsInput
    upsert?: menu_categoriesUpsertWithoutMenu_itemsInput
    disconnect?: menu_categoriesWhereInput | boolean
    delete?: menu_categoriesWhereInput | boolean
    connect?: menu_categoriesWhereUniqueInput
    update?: XOR<XOR<menu_categoriesUpdateToOneWithWhereWithoutMenu_itemsInput, menu_categoriesUpdateWithoutMenu_itemsInput>, menu_categoriesUncheckedUpdateWithoutMenu_itemsInput>
  }

  export type order_linesUpdateManyWithoutMenu_itemsNestedInput = {
    create?: XOR<order_linesCreateWithoutMenu_itemsInput, order_linesUncheckedCreateWithoutMenu_itemsInput> | order_linesCreateWithoutMenu_itemsInput[] | order_linesUncheckedCreateWithoutMenu_itemsInput[]
    connectOrCreate?: order_linesCreateOrConnectWithoutMenu_itemsInput | order_linesCreateOrConnectWithoutMenu_itemsInput[]
    upsert?: order_linesUpsertWithWhereUniqueWithoutMenu_itemsInput | order_linesUpsertWithWhereUniqueWithoutMenu_itemsInput[]
    createMany?: order_linesCreateManyMenu_itemsInputEnvelope
    set?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    disconnect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    delete?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    connect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    update?: order_linesUpdateWithWhereUniqueWithoutMenu_itemsInput | order_linesUpdateWithWhereUniqueWithoutMenu_itemsInput[]
    updateMany?: order_linesUpdateManyWithWhereWithoutMenu_itemsInput | order_linesUpdateManyWithWhereWithoutMenu_itemsInput[]
    deleteMany?: order_linesScalarWhereInput | order_linesScalarWhereInput[]
  }

  export type recipe_itemsUpdateManyWithoutMenu_itemsNestedInput = {
    create?: XOR<recipe_itemsCreateWithoutMenu_itemsInput, recipe_itemsUncheckedCreateWithoutMenu_itemsInput> | recipe_itemsCreateWithoutMenu_itemsInput[] | recipe_itemsUncheckedCreateWithoutMenu_itemsInput[]
    connectOrCreate?: recipe_itemsCreateOrConnectWithoutMenu_itemsInput | recipe_itemsCreateOrConnectWithoutMenu_itemsInput[]
    upsert?: recipe_itemsUpsertWithWhereUniqueWithoutMenu_itemsInput | recipe_itemsUpsertWithWhereUniqueWithoutMenu_itemsInput[]
    createMany?: recipe_itemsCreateManyMenu_itemsInputEnvelope
    set?: recipe_itemsWhereUniqueInput | recipe_itemsWhereUniqueInput[]
    disconnect?: recipe_itemsWhereUniqueInput | recipe_itemsWhereUniqueInput[]
    delete?: recipe_itemsWhereUniqueInput | recipe_itemsWhereUniqueInput[]
    connect?: recipe_itemsWhereUniqueInput | recipe_itemsWhereUniqueInput[]
    update?: recipe_itemsUpdateWithWhereUniqueWithoutMenu_itemsInput | recipe_itemsUpdateWithWhereUniqueWithoutMenu_itemsInput[]
    updateMany?: recipe_itemsUpdateManyWithWhereWithoutMenu_itemsInput | recipe_itemsUpdateManyWithWhereWithoutMenu_itemsInput[]
    deleteMany?: recipe_itemsScalarWhereInput | recipe_itemsScalarWhereInput[]
  }

  export type order_linesUncheckedUpdateManyWithoutMenu_itemsNestedInput = {
    create?: XOR<order_linesCreateWithoutMenu_itemsInput, order_linesUncheckedCreateWithoutMenu_itemsInput> | order_linesCreateWithoutMenu_itemsInput[] | order_linesUncheckedCreateWithoutMenu_itemsInput[]
    connectOrCreate?: order_linesCreateOrConnectWithoutMenu_itemsInput | order_linesCreateOrConnectWithoutMenu_itemsInput[]
    upsert?: order_linesUpsertWithWhereUniqueWithoutMenu_itemsInput | order_linesUpsertWithWhereUniqueWithoutMenu_itemsInput[]
    createMany?: order_linesCreateManyMenu_itemsInputEnvelope
    set?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    disconnect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    delete?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    connect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    update?: order_linesUpdateWithWhereUniqueWithoutMenu_itemsInput | order_linesUpdateWithWhereUniqueWithoutMenu_itemsInput[]
    updateMany?: order_linesUpdateManyWithWhereWithoutMenu_itemsInput | order_linesUpdateManyWithWhereWithoutMenu_itemsInput[]
    deleteMany?: order_linesScalarWhereInput | order_linesScalarWhereInput[]
  }

  export type recipe_itemsUncheckedUpdateManyWithoutMenu_itemsNestedInput = {
    create?: XOR<recipe_itemsCreateWithoutMenu_itemsInput, recipe_itemsUncheckedCreateWithoutMenu_itemsInput> | recipe_itemsCreateWithoutMenu_itemsInput[] | recipe_itemsUncheckedCreateWithoutMenu_itemsInput[]
    connectOrCreate?: recipe_itemsCreateOrConnectWithoutMenu_itemsInput | recipe_itemsCreateOrConnectWithoutMenu_itemsInput[]
    upsert?: recipe_itemsUpsertWithWhereUniqueWithoutMenu_itemsInput | recipe_itemsUpsertWithWhereUniqueWithoutMenu_itemsInput[]
    createMany?: recipe_itemsCreateManyMenu_itemsInputEnvelope
    set?: recipe_itemsWhereUniqueInput | recipe_itemsWhereUniqueInput[]
    disconnect?: recipe_itemsWhereUniqueInput | recipe_itemsWhereUniqueInput[]
    delete?: recipe_itemsWhereUniqueInput | recipe_itemsWhereUniqueInput[]
    connect?: recipe_itemsWhereUniqueInput | recipe_itemsWhereUniqueInput[]
    update?: recipe_itemsUpdateWithWhereUniqueWithoutMenu_itemsInput | recipe_itemsUpdateWithWhereUniqueWithoutMenu_itemsInput[]
    updateMany?: recipe_itemsUpdateManyWithWhereWithoutMenu_itemsInput | recipe_itemsUpdateManyWithWhereWithoutMenu_itemsInput[]
    deleteMany?: recipe_itemsScalarWhereInput | recipe_itemsScalarWhereInput[]
  }

  export type menu_itemsCreateNestedOneWithoutOrder_linesInput = {
    create?: XOR<menu_itemsCreateWithoutOrder_linesInput, menu_itemsUncheckedCreateWithoutOrder_linesInput>
    connectOrCreate?: menu_itemsCreateOrConnectWithoutOrder_linesInput
    connect?: menu_itemsWhereUniqueInput
  }

  export type ordersCreateNestedOneWithoutOrder_linesInput = {
    create?: XOR<ordersCreateWithoutOrder_linesInput, ordersUncheckedCreateWithoutOrder_linesInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_linesInput
    connect?: ordersWhereUniqueInput
  }

  export type menu_itemsUpdateOneRequiredWithoutOrder_linesNestedInput = {
    create?: XOR<menu_itemsCreateWithoutOrder_linesInput, menu_itemsUncheckedCreateWithoutOrder_linesInput>
    connectOrCreate?: menu_itemsCreateOrConnectWithoutOrder_linesInput
    upsert?: menu_itemsUpsertWithoutOrder_linesInput
    connect?: menu_itemsWhereUniqueInput
    update?: XOR<XOR<menu_itemsUpdateToOneWithWhereWithoutOrder_linesInput, menu_itemsUpdateWithoutOrder_linesInput>, menu_itemsUncheckedUpdateWithoutOrder_linesInput>
  }

  export type ordersUpdateOneRequiredWithoutOrder_linesNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_linesInput, ordersUncheckedCreateWithoutOrder_linesInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_linesInput
    upsert?: ordersUpsertWithoutOrder_linesInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrder_linesInput, ordersUpdateWithoutOrder_linesInput>, ordersUncheckedUpdateWithoutOrder_linesInput>
  }

  export type order_linesCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_linesCreateWithoutOrdersInput, order_linesUncheckedCreateWithoutOrdersInput> | order_linesCreateWithoutOrdersInput[] | order_linesUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_linesCreateOrConnectWithoutOrdersInput | order_linesCreateOrConnectWithoutOrdersInput[]
    createMany?: order_linesCreateManyOrdersInputEnvelope
    connect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
  }

  export type clientsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<clientsCreateWithoutOrdersInput, clientsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: clientsCreateOrConnectWithoutOrdersInput
    connect?: clientsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    connect?: usersWhereUniqueInput
  }

  export type paymentsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<paymentsCreateWithoutOrdersInput, paymentsUncheckedCreateWithoutOrdersInput> | paymentsCreateWithoutOrdersInput[] | paymentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutOrdersInput | paymentsCreateOrConnectWithoutOrdersInput[]
    createMany?: paymentsCreateManyOrdersInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type stock_movementsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<stock_movementsCreateWithoutOrdersInput, stock_movementsUncheckedCreateWithoutOrdersInput> | stock_movementsCreateWithoutOrdersInput[] | stock_movementsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: stock_movementsCreateOrConnectWithoutOrdersInput | stock_movementsCreateOrConnectWithoutOrdersInput[]
    createMany?: stock_movementsCreateManyOrdersInputEnvelope
    connect?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
  }

  export type order_linesUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_linesCreateWithoutOrdersInput, order_linesUncheckedCreateWithoutOrdersInput> | order_linesCreateWithoutOrdersInput[] | order_linesUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_linesCreateOrConnectWithoutOrdersInput | order_linesCreateOrConnectWithoutOrdersInput[]
    createMany?: order_linesCreateManyOrdersInputEnvelope
    connect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
  }

  export type paymentsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<paymentsCreateWithoutOrdersInput, paymentsUncheckedCreateWithoutOrdersInput> | paymentsCreateWithoutOrdersInput[] | paymentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutOrdersInput | paymentsCreateOrConnectWithoutOrdersInput[]
    createMany?: paymentsCreateManyOrdersInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type stock_movementsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<stock_movementsCreateWithoutOrdersInput, stock_movementsUncheckedCreateWithoutOrdersInput> | stock_movementsCreateWithoutOrdersInput[] | stock_movementsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: stock_movementsCreateOrConnectWithoutOrdersInput | stock_movementsCreateOrConnectWithoutOrdersInput[]
    createMany?: stock_movementsCreateManyOrdersInputEnvelope
    connect?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
  }

  export type NullableEnumorder_statusFieldUpdateOperationsInput = {
    set?: $Enums.order_status | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type order_linesUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_linesCreateWithoutOrdersInput, order_linesUncheckedCreateWithoutOrdersInput> | order_linesCreateWithoutOrdersInput[] | order_linesUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_linesCreateOrConnectWithoutOrdersInput | order_linesCreateOrConnectWithoutOrdersInput[]
    upsert?: order_linesUpsertWithWhereUniqueWithoutOrdersInput | order_linesUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_linesCreateManyOrdersInputEnvelope
    set?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    disconnect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    delete?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    connect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    update?: order_linesUpdateWithWhereUniqueWithoutOrdersInput | order_linesUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_linesUpdateManyWithWhereWithoutOrdersInput | order_linesUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_linesScalarWhereInput | order_linesScalarWhereInput[]
  }

  export type clientsUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<clientsCreateWithoutOrdersInput, clientsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: clientsCreateOrConnectWithoutOrdersInput
    upsert?: clientsUpsertWithoutOrdersInput
    disconnect?: clientsWhereInput | boolean
    delete?: clientsWhereInput | boolean
    connect?: clientsWhereUniqueInput
    update?: XOR<XOR<clientsUpdateToOneWithWhereWithoutOrdersInput, clientsUpdateWithoutOrdersInput>, clientsUncheckedUpdateWithoutOrdersInput>
  }

  export type usersUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    upsert?: usersUpsertWithoutOrdersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrdersInput, usersUpdateWithoutOrdersInput>, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type paymentsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<paymentsCreateWithoutOrdersInput, paymentsUncheckedCreateWithoutOrdersInput> | paymentsCreateWithoutOrdersInput[] | paymentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutOrdersInput | paymentsCreateOrConnectWithoutOrdersInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutOrdersInput | paymentsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: paymentsCreateManyOrdersInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutOrdersInput | paymentsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutOrdersInput | paymentsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type stock_movementsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<stock_movementsCreateWithoutOrdersInput, stock_movementsUncheckedCreateWithoutOrdersInput> | stock_movementsCreateWithoutOrdersInput[] | stock_movementsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: stock_movementsCreateOrConnectWithoutOrdersInput | stock_movementsCreateOrConnectWithoutOrdersInput[]
    upsert?: stock_movementsUpsertWithWhereUniqueWithoutOrdersInput | stock_movementsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: stock_movementsCreateManyOrdersInputEnvelope
    set?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    disconnect?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    delete?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    connect?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    update?: stock_movementsUpdateWithWhereUniqueWithoutOrdersInput | stock_movementsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: stock_movementsUpdateManyWithWhereWithoutOrdersInput | stock_movementsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: stock_movementsScalarWhereInput | stock_movementsScalarWhereInput[]
  }

  export type order_linesUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_linesCreateWithoutOrdersInput, order_linesUncheckedCreateWithoutOrdersInput> | order_linesCreateWithoutOrdersInput[] | order_linesUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_linesCreateOrConnectWithoutOrdersInput | order_linesCreateOrConnectWithoutOrdersInput[]
    upsert?: order_linesUpsertWithWhereUniqueWithoutOrdersInput | order_linesUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_linesCreateManyOrdersInputEnvelope
    set?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    disconnect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    delete?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    connect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    update?: order_linesUpdateWithWhereUniqueWithoutOrdersInput | order_linesUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_linesUpdateManyWithWhereWithoutOrdersInput | order_linesUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_linesScalarWhereInput | order_linesScalarWhereInput[]
  }

  export type paymentsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<paymentsCreateWithoutOrdersInput, paymentsUncheckedCreateWithoutOrdersInput> | paymentsCreateWithoutOrdersInput[] | paymentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutOrdersInput | paymentsCreateOrConnectWithoutOrdersInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutOrdersInput | paymentsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: paymentsCreateManyOrdersInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutOrdersInput | paymentsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutOrdersInput | paymentsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type stock_movementsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<stock_movementsCreateWithoutOrdersInput, stock_movementsUncheckedCreateWithoutOrdersInput> | stock_movementsCreateWithoutOrdersInput[] | stock_movementsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: stock_movementsCreateOrConnectWithoutOrdersInput | stock_movementsCreateOrConnectWithoutOrdersInput[]
    upsert?: stock_movementsUpsertWithWhereUniqueWithoutOrdersInput | stock_movementsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: stock_movementsCreateManyOrdersInputEnvelope
    set?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    disconnect?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    delete?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    connect?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    update?: stock_movementsUpdateWithWhereUniqueWithoutOrdersInput | stock_movementsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: stock_movementsUpdateManyWithWhereWithoutOrdersInput | stock_movementsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: stock_movementsScalarWhereInput | stock_movementsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<usersCreateWithoutPaymentsInput, usersUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPaymentsInput
    connect?: usersWhereUniqueInput
  }

  export type ordersCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<ordersCreateWithoutPaymentsInput, ordersUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutPaymentsInput
    connect?: ordersWhereUniqueInput
  }

  export type Enumpayment_methodFieldUpdateOperationsInput = {
    set?: $Enums.payment_method
  }

  export type usersUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<usersCreateWithoutPaymentsInput, usersUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPaymentsInput
    upsert?: usersUpsertWithoutPaymentsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPaymentsInput, usersUpdateWithoutPaymentsInput>, usersUncheckedUpdateWithoutPaymentsInput>
  }

  export type ordersUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<ordersCreateWithoutPaymentsInput, ordersUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutPaymentsInput
    upsert?: ordersUpsertWithoutPaymentsInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutPaymentsInput, ordersUpdateWithoutPaymentsInput>, ordersUncheckedUpdateWithoutPaymentsInput>
  }

  export type menu_itemsCreateNestedOneWithoutRecipe_itemsInput = {
    create?: XOR<menu_itemsCreateWithoutRecipe_itemsInput, menu_itemsUncheckedCreateWithoutRecipe_itemsInput>
    connectOrCreate?: menu_itemsCreateOrConnectWithoutRecipe_itemsInput
    connect?: menu_itemsWhereUniqueInput
  }

  export type stock_itemsCreateNestedOneWithoutRecipe_itemsInput = {
    create?: XOR<stock_itemsCreateWithoutRecipe_itemsInput, stock_itemsUncheckedCreateWithoutRecipe_itemsInput>
    connectOrCreate?: stock_itemsCreateOrConnectWithoutRecipe_itemsInput
    connect?: stock_itemsWhereUniqueInput
  }

  export type menu_itemsUpdateOneRequiredWithoutRecipe_itemsNestedInput = {
    create?: XOR<menu_itemsCreateWithoutRecipe_itemsInput, menu_itemsUncheckedCreateWithoutRecipe_itemsInput>
    connectOrCreate?: menu_itemsCreateOrConnectWithoutRecipe_itemsInput
    upsert?: menu_itemsUpsertWithoutRecipe_itemsInput
    connect?: menu_itemsWhereUniqueInput
    update?: XOR<XOR<menu_itemsUpdateToOneWithWhereWithoutRecipe_itemsInput, menu_itemsUpdateWithoutRecipe_itemsInput>, menu_itemsUncheckedUpdateWithoutRecipe_itemsInput>
  }

  export type stock_itemsUpdateOneRequiredWithoutRecipe_itemsNestedInput = {
    create?: XOR<stock_itemsCreateWithoutRecipe_itemsInput, stock_itemsUncheckedCreateWithoutRecipe_itemsInput>
    connectOrCreate?: stock_itemsCreateOrConnectWithoutRecipe_itemsInput
    upsert?: stock_itemsUpsertWithoutRecipe_itemsInput
    connect?: stock_itemsWhereUniqueInput
    update?: XOR<XOR<stock_itemsUpdateToOneWithWhereWithoutRecipe_itemsInput, stock_itemsUpdateWithoutRecipe_itemsInput>, stock_itemsUncheckedUpdateWithoutRecipe_itemsInput>
  }

  export type recipe_itemsCreateNestedManyWithoutStock_itemsInput = {
    create?: XOR<recipe_itemsCreateWithoutStock_itemsInput, recipe_itemsUncheckedCreateWithoutStock_itemsInput> | recipe_itemsCreateWithoutStock_itemsInput[] | recipe_itemsUncheckedCreateWithoutStock_itemsInput[]
    connectOrCreate?: recipe_itemsCreateOrConnectWithoutStock_itemsInput | recipe_itemsCreateOrConnectWithoutStock_itemsInput[]
    createMany?: recipe_itemsCreateManyStock_itemsInputEnvelope
    connect?: recipe_itemsWhereUniqueInput | recipe_itemsWhereUniqueInput[]
  }

  export type stock_movementsCreateNestedManyWithoutStock_itemsInput = {
    create?: XOR<stock_movementsCreateWithoutStock_itemsInput, stock_movementsUncheckedCreateWithoutStock_itemsInput> | stock_movementsCreateWithoutStock_itemsInput[] | stock_movementsUncheckedCreateWithoutStock_itemsInput[]
    connectOrCreate?: stock_movementsCreateOrConnectWithoutStock_itemsInput | stock_movementsCreateOrConnectWithoutStock_itemsInput[]
    createMany?: stock_movementsCreateManyStock_itemsInputEnvelope
    connect?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
  }

  export type recipe_itemsUncheckedCreateNestedManyWithoutStock_itemsInput = {
    create?: XOR<recipe_itemsCreateWithoutStock_itemsInput, recipe_itemsUncheckedCreateWithoutStock_itemsInput> | recipe_itemsCreateWithoutStock_itemsInput[] | recipe_itemsUncheckedCreateWithoutStock_itemsInput[]
    connectOrCreate?: recipe_itemsCreateOrConnectWithoutStock_itemsInput | recipe_itemsCreateOrConnectWithoutStock_itemsInput[]
    createMany?: recipe_itemsCreateManyStock_itemsInputEnvelope
    connect?: recipe_itemsWhereUniqueInput | recipe_itemsWhereUniqueInput[]
  }

  export type stock_movementsUncheckedCreateNestedManyWithoutStock_itemsInput = {
    create?: XOR<stock_movementsCreateWithoutStock_itemsInput, stock_movementsUncheckedCreateWithoutStock_itemsInput> | stock_movementsCreateWithoutStock_itemsInput[] | stock_movementsUncheckedCreateWithoutStock_itemsInput[]
    connectOrCreate?: stock_movementsCreateOrConnectWithoutStock_itemsInput | stock_movementsCreateOrConnectWithoutStock_itemsInput[]
    createMany?: stock_movementsCreateManyStock_itemsInputEnvelope
    connect?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
  }

  export type recipe_itemsUpdateManyWithoutStock_itemsNestedInput = {
    create?: XOR<recipe_itemsCreateWithoutStock_itemsInput, recipe_itemsUncheckedCreateWithoutStock_itemsInput> | recipe_itemsCreateWithoutStock_itemsInput[] | recipe_itemsUncheckedCreateWithoutStock_itemsInput[]
    connectOrCreate?: recipe_itemsCreateOrConnectWithoutStock_itemsInput | recipe_itemsCreateOrConnectWithoutStock_itemsInput[]
    upsert?: recipe_itemsUpsertWithWhereUniqueWithoutStock_itemsInput | recipe_itemsUpsertWithWhereUniqueWithoutStock_itemsInput[]
    createMany?: recipe_itemsCreateManyStock_itemsInputEnvelope
    set?: recipe_itemsWhereUniqueInput | recipe_itemsWhereUniqueInput[]
    disconnect?: recipe_itemsWhereUniqueInput | recipe_itemsWhereUniqueInput[]
    delete?: recipe_itemsWhereUniqueInput | recipe_itemsWhereUniqueInput[]
    connect?: recipe_itemsWhereUniqueInput | recipe_itemsWhereUniqueInput[]
    update?: recipe_itemsUpdateWithWhereUniqueWithoutStock_itemsInput | recipe_itemsUpdateWithWhereUniqueWithoutStock_itemsInput[]
    updateMany?: recipe_itemsUpdateManyWithWhereWithoutStock_itemsInput | recipe_itemsUpdateManyWithWhereWithoutStock_itemsInput[]
    deleteMany?: recipe_itemsScalarWhereInput | recipe_itemsScalarWhereInput[]
  }

  export type stock_movementsUpdateManyWithoutStock_itemsNestedInput = {
    create?: XOR<stock_movementsCreateWithoutStock_itemsInput, stock_movementsUncheckedCreateWithoutStock_itemsInput> | stock_movementsCreateWithoutStock_itemsInput[] | stock_movementsUncheckedCreateWithoutStock_itemsInput[]
    connectOrCreate?: stock_movementsCreateOrConnectWithoutStock_itemsInput | stock_movementsCreateOrConnectWithoutStock_itemsInput[]
    upsert?: stock_movementsUpsertWithWhereUniqueWithoutStock_itemsInput | stock_movementsUpsertWithWhereUniqueWithoutStock_itemsInput[]
    createMany?: stock_movementsCreateManyStock_itemsInputEnvelope
    set?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    disconnect?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    delete?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    connect?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    update?: stock_movementsUpdateWithWhereUniqueWithoutStock_itemsInput | stock_movementsUpdateWithWhereUniqueWithoutStock_itemsInput[]
    updateMany?: stock_movementsUpdateManyWithWhereWithoutStock_itemsInput | stock_movementsUpdateManyWithWhereWithoutStock_itemsInput[]
    deleteMany?: stock_movementsScalarWhereInput | stock_movementsScalarWhereInput[]
  }

  export type recipe_itemsUncheckedUpdateManyWithoutStock_itemsNestedInput = {
    create?: XOR<recipe_itemsCreateWithoutStock_itemsInput, recipe_itemsUncheckedCreateWithoutStock_itemsInput> | recipe_itemsCreateWithoutStock_itemsInput[] | recipe_itemsUncheckedCreateWithoutStock_itemsInput[]
    connectOrCreate?: recipe_itemsCreateOrConnectWithoutStock_itemsInput | recipe_itemsCreateOrConnectWithoutStock_itemsInput[]
    upsert?: recipe_itemsUpsertWithWhereUniqueWithoutStock_itemsInput | recipe_itemsUpsertWithWhereUniqueWithoutStock_itemsInput[]
    createMany?: recipe_itemsCreateManyStock_itemsInputEnvelope
    set?: recipe_itemsWhereUniqueInput | recipe_itemsWhereUniqueInput[]
    disconnect?: recipe_itemsWhereUniqueInput | recipe_itemsWhereUniqueInput[]
    delete?: recipe_itemsWhereUniqueInput | recipe_itemsWhereUniqueInput[]
    connect?: recipe_itemsWhereUniqueInput | recipe_itemsWhereUniqueInput[]
    update?: recipe_itemsUpdateWithWhereUniqueWithoutStock_itemsInput | recipe_itemsUpdateWithWhereUniqueWithoutStock_itemsInput[]
    updateMany?: recipe_itemsUpdateManyWithWhereWithoutStock_itemsInput | recipe_itemsUpdateManyWithWhereWithoutStock_itemsInput[]
    deleteMany?: recipe_itemsScalarWhereInput | recipe_itemsScalarWhereInput[]
  }

  export type stock_movementsUncheckedUpdateManyWithoutStock_itemsNestedInput = {
    create?: XOR<stock_movementsCreateWithoutStock_itemsInput, stock_movementsUncheckedCreateWithoutStock_itemsInput> | stock_movementsCreateWithoutStock_itemsInput[] | stock_movementsUncheckedCreateWithoutStock_itemsInput[]
    connectOrCreate?: stock_movementsCreateOrConnectWithoutStock_itemsInput | stock_movementsCreateOrConnectWithoutStock_itemsInput[]
    upsert?: stock_movementsUpsertWithWhereUniqueWithoutStock_itemsInput | stock_movementsUpsertWithWhereUniqueWithoutStock_itemsInput[]
    createMany?: stock_movementsCreateManyStock_itemsInputEnvelope
    set?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    disconnect?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    delete?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    connect?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    update?: stock_movementsUpdateWithWhereUniqueWithoutStock_itemsInput | stock_movementsUpdateWithWhereUniqueWithoutStock_itemsInput[]
    updateMany?: stock_movementsUpdateManyWithWhereWithoutStock_itemsInput | stock_movementsUpdateManyWithWhereWithoutStock_itemsInput[]
    deleteMany?: stock_movementsScalarWhereInput | stock_movementsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutStock_movementsInput = {
    create?: XOR<usersCreateWithoutStock_movementsInput, usersUncheckedCreateWithoutStock_movementsInput>
    connectOrCreate?: usersCreateOrConnectWithoutStock_movementsInput
    connect?: usersWhereUniqueInput
  }

  export type ordersCreateNestedOneWithoutStock_movementsInput = {
    create?: XOR<ordersCreateWithoutStock_movementsInput, ordersUncheckedCreateWithoutStock_movementsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutStock_movementsInput
    connect?: ordersWhereUniqueInput
  }

  export type stock_itemsCreateNestedOneWithoutStock_movementsInput = {
    create?: XOR<stock_itemsCreateWithoutStock_movementsInput, stock_itemsUncheckedCreateWithoutStock_movementsInput>
    connectOrCreate?: stock_itemsCreateOrConnectWithoutStock_movementsInput
    connect?: stock_itemsWhereUniqueInput
  }

  export type Enumstock_movement_typeFieldUpdateOperationsInput = {
    set?: $Enums.stock_movement_type
  }

  export type usersUpdateOneWithoutStock_movementsNestedInput = {
    create?: XOR<usersCreateWithoutStock_movementsInput, usersUncheckedCreateWithoutStock_movementsInput>
    connectOrCreate?: usersCreateOrConnectWithoutStock_movementsInput
    upsert?: usersUpsertWithoutStock_movementsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutStock_movementsInput, usersUpdateWithoutStock_movementsInput>, usersUncheckedUpdateWithoutStock_movementsInput>
  }

  export type ordersUpdateOneWithoutStock_movementsNestedInput = {
    create?: XOR<ordersCreateWithoutStock_movementsInput, ordersUncheckedCreateWithoutStock_movementsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutStock_movementsInput
    upsert?: ordersUpsertWithoutStock_movementsInput
    disconnect?: ordersWhereInput | boolean
    delete?: ordersWhereInput | boolean
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutStock_movementsInput, ordersUpdateWithoutStock_movementsInput>, ordersUncheckedUpdateWithoutStock_movementsInput>
  }

  export type stock_itemsUpdateOneRequiredWithoutStock_movementsNestedInput = {
    create?: XOR<stock_itemsCreateWithoutStock_movementsInput, stock_itemsUncheckedCreateWithoutStock_movementsInput>
    connectOrCreate?: stock_itemsCreateOrConnectWithoutStock_movementsInput
    upsert?: stock_itemsUpsertWithoutStock_movementsInput
    connect?: stock_itemsWhereUniqueInput
    update?: XOR<XOR<stock_itemsUpdateToOneWithWhereWithoutStock_movementsInput, stock_itemsUpdateWithoutStock_movementsInput>, stock_itemsUncheckedUpdateWithoutStock_movementsInput>
  }

  export type expensesCreateNestedManyWithoutUsersInput = {
    create?: XOR<expensesCreateWithoutUsersInput, expensesUncheckedCreateWithoutUsersInput> | expensesCreateWithoutUsersInput[] | expensesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutUsersInput | expensesCreateOrConnectWithoutUsersInput[]
    createMany?: expensesCreateManyUsersInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type ordersCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type paymentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<paymentsCreateWithoutUsersInput, paymentsUncheckedCreateWithoutUsersInput> | paymentsCreateWithoutUsersInput[] | paymentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutUsersInput | paymentsCreateOrConnectWithoutUsersInput[]
    createMany?: paymentsCreateManyUsersInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type stock_movementsCreateNestedManyWithoutUsersInput = {
    create?: XOR<stock_movementsCreateWithoutUsersInput, stock_movementsUncheckedCreateWithoutUsersInput> | stock_movementsCreateWithoutUsersInput[] | stock_movementsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: stock_movementsCreateOrConnectWithoutUsersInput | stock_movementsCreateOrConnectWithoutUsersInput[]
    createMany?: stock_movementsCreateManyUsersInputEnvelope
    connect?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
  }

  export type expensesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<expensesCreateWithoutUsersInput, expensesUncheckedCreateWithoutUsersInput> | expensesCreateWithoutUsersInput[] | expensesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutUsersInput | expensesCreateOrConnectWithoutUsersInput[]
    createMany?: expensesCreateManyUsersInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type paymentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<paymentsCreateWithoutUsersInput, paymentsUncheckedCreateWithoutUsersInput> | paymentsCreateWithoutUsersInput[] | paymentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutUsersInput | paymentsCreateOrConnectWithoutUsersInput[]
    createMany?: paymentsCreateManyUsersInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type stock_movementsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<stock_movementsCreateWithoutUsersInput, stock_movementsUncheckedCreateWithoutUsersInput> | stock_movementsCreateWithoutUsersInput[] | stock_movementsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: stock_movementsCreateOrConnectWithoutUsersInput | stock_movementsCreateOrConnectWithoutUsersInput[]
    createMany?: stock_movementsCreateManyUsersInputEnvelope
    connect?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
  }

  export type expensesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<expensesCreateWithoutUsersInput, expensesUncheckedCreateWithoutUsersInput> | expensesCreateWithoutUsersInput[] | expensesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutUsersInput | expensesCreateOrConnectWithoutUsersInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutUsersInput | expensesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: expensesCreateManyUsersInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutUsersInput | expensesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutUsersInput | expensesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type ordersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type paymentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<paymentsCreateWithoutUsersInput, paymentsUncheckedCreateWithoutUsersInput> | paymentsCreateWithoutUsersInput[] | paymentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutUsersInput | paymentsCreateOrConnectWithoutUsersInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutUsersInput | paymentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: paymentsCreateManyUsersInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutUsersInput | paymentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutUsersInput | paymentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type stock_movementsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<stock_movementsCreateWithoutUsersInput, stock_movementsUncheckedCreateWithoutUsersInput> | stock_movementsCreateWithoutUsersInput[] | stock_movementsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: stock_movementsCreateOrConnectWithoutUsersInput | stock_movementsCreateOrConnectWithoutUsersInput[]
    upsert?: stock_movementsUpsertWithWhereUniqueWithoutUsersInput | stock_movementsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: stock_movementsCreateManyUsersInputEnvelope
    set?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    disconnect?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    delete?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    connect?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    update?: stock_movementsUpdateWithWhereUniqueWithoutUsersInput | stock_movementsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: stock_movementsUpdateManyWithWhereWithoutUsersInput | stock_movementsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: stock_movementsScalarWhereInput | stock_movementsScalarWhereInput[]
  }

  export type expensesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<expensesCreateWithoutUsersInput, expensesUncheckedCreateWithoutUsersInput> | expensesCreateWithoutUsersInput[] | expensesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutUsersInput | expensesCreateOrConnectWithoutUsersInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutUsersInput | expensesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: expensesCreateManyUsersInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutUsersInput | expensesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutUsersInput | expensesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type paymentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<paymentsCreateWithoutUsersInput, paymentsUncheckedCreateWithoutUsersInput> | paymentsCreateWithoutUsersInput[] | paymentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutUsersInput | paymentsCreateOrConnectWithoutUsersInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutUsersInput | paymentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: paymentsCreateManyUsersInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutUsersInput | paymentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutUsersInput | paymentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type stock_movementsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<stock_movementsCreateWithoutUsersInput, stock_movementsUncheckedCreateWithoutUsersInput> | stock_movementsCreateWithoutUsersInput[] | stock_movementsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: stock_movementsCreateOrConnectWithoutUsersInput | stock_movementsCreateOrConnectWithoutUsersInput[]
    upsert?: stock_movementsUpsertWithWhereUniqueWithoutUsersInput | stock_movementsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: stock_movementsCreateManyUsersInputEnvelope
    set?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    disconnect?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    delete?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    connect?: stock_movementsWhereUniqueInput | stock_movementsWhereUniqueInput[]
    update?: stock_movementsUpdateWithWhereUniqueWithoutUsersInput | stock_movementsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: stock_movementsUpdateManyWithWhereWithoutUsersInput | stock_movementsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: stock_movementsScalarWhereInput | stock_movementsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumorder_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumorder_statusNullableFilter<$PrismaModel> | $Enums.order_status | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumorder_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumorder_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.order_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumorder_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumorder_statusNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumpayment_methodFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_methodFilter<$PrismaModel> | $Enums.payment_method
  }

  export type NestedEnumpayment_methodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_methodWithAggregatesFilter<$PrismaModel> | $Enums.payment_method
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_methodFilter<$PrismaModel>
    _max?: NestedEnumpayment_methodFilter<$PrismaModel>
  }

  export type NestedEnumstock_movement_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.stock_movement_type | Enumstock_movement_typeFieldRefInput<$PrismaModel>
    in?: $Enums.stock_movement_type[] | ListEnumstock_movement_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.stock_movement_type[] | ListEnumstock_movement_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumstock_movement_typeFilter<$PrismaModel> | $Enums.stock_movement_type
  }

  export type NestedEnumstock_movement_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.stock_movement_type | Enumstock_movement_typeFieldRefInput<$PrismaModel>
    in?: $Enums.stock_movement_type[] | ListEnumstock_movement_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.stock_movement_type[] | ListEnumstock_movement_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumstock_movement_typeWithAggregatesFilter<$PrismaModel> | $Enums.stock_movement_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstock_movement_typeFilter<$PrismaModel>
    _max?: NestedEnumstock_movement_typeFilter<$PrismaModel>
  }

  export type ordersCreateWithoutClientsInput = {
    table_number?: string | null
    order_type?: string | null
    status?: $Enums.order_status | null
    total?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    created_at?: Date | string | null
    order_lines?: order_linesCreateNestedManyWithoutOrdersInput
    users?: usersCreateNestedOneWithoutOrdersInput
    payments?: paymentsCreateNestedManyWithoutOrdersInput
    stock_movements?: stock_movementsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutClientsInput = {
    id?: number
    table_number?: string | null
    order_type?: string | null
    status?: $Enums.order_status | null
    total?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    order_lines?: order_linesUncheckedCreateNestedManyWithoutOrdersInput
    payments?: paymentsUncheckedCreateNestedManyWithoutOrdersInput
    stock_movements?: stock_movementsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutClientsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutClientsInput, ordersUncheckedCreateWithoutClientsInput>
  }

  export type ordersCreateManyClientsInputEnvelope = {
    data: ordersCreateManyClientsInput | ordersCreateManyClientsInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutClientsInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutClientsInput, ordersUncheckedUpdateWithoutClientsInput>
    create: XOR<ordersCreateWithoutClientsInput, ordersUncheckedCreateWithoutClientsInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutClientsInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutClientsInput, ordersUncheckedUpdateWithoutClientsInput>
  }

  export type ordersUpdateManyWithWhereWithoutClientsInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutClientsInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    id?: IntFilter<"orders"> | number
    client_id?: IntNullableFilter<"orders"> | number | null
    table_number?: StringNullableFilter<"orders"> | string | null
    order_type?: StringNullableFilter<"orders"> | string | null
    status?: Enumorder_statusNullableFilter<"orders"> | $Enums.order_status | null
    total?: DecimalNullableFilter<"orders"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"orders"> | string | null
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    created_by?: IntNullableFilter<"orders"> | number | null
  }

  export type usersCreateWithoutExpensesInput = {
    username: string
    email?: string | null
    full_name?: string | null
    password_hash: string
    role?: string
    is_active?: boolean | null
    created_at?: Date | string | null
    orders?: ordersCreateNestedManyWithoutUsersInput
    payments?: paymentsCreateNestedManyWithoutUsersInput
    stock_movements?: stock_movementsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutExpensesInput = {
    id?: number
    username: string
    email?: string | null
    full_name?: string | null
    password_hash: string
    role?: string
    is_active?: boolean | null
    created_at?: Date | string | null
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    payments?: paymentsUncheckedCreateNestedManyWithoutUsersInput
    stock_movements?: stock_movementsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutExpensesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutExpensesInput, usersUncheckedCreateWithoutExpensesInput>
  }

  export type usersUpsertWithoutExpensesInput = {
    update: XOR<usersUpdateWithoutExpensesInput, usersUncheckedUpdateWithoutExpensesInput>
    create: XOR<usersCreateWithoutExpensesInput, usersUncheckedCreateWithoutExpensesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutExpensesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutExpensesInput, usersUncheckedUpdateWithoutExpensesInput>
  }

  export type usersUpdateWithoutExpensesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateManyWithoutUsersNestedInput
    payments?: paymentsUpdateManyWithoutUsersNestedInput
    stock_movements?: stock_movementsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutExpensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutUsersNestedInput
    stock_movements?: stock_movementsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type menu_itemsCreateWithoutMenu_categoriesInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    is_available?: boolean | null
    created_at?: Date | string | null
    image_url?: string | null
    order_lines?: order_linesCreateNestedManyWithoutMenu_itemsInput
    recipe_items?: recipe_itemsCreateNestedManyWithoutMenu_itemsInput
  }

  export type menu_itemsUncheckedCreateWithoutMenu_categoriesInput = {
    id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    is_available?: boolean | null
    created_at?: Date | string | null
    image_url?: string | null
    order_lines?: order_linesUncheckedCreateNestedManyWithoutMenu_itemsInput
    recipe_items?: recipe_itemsUncheckedCreateNestedManyWithoutMenu_itemsInput
  }

  export type menu_itemsCreateOrConnectWithoutMenu_categoriesInput = {
    where: menu_itemsWhereUniqueInput
    create: XOR<menu_itemsCreateWithoutMenu_categoriesInput, menu_itemsUncheckedCreateWithoutMenu_categoriesInput>
  }

  export type menu_itemsCreateManyMenu_categoriesInputEnvelope = {
    data: menu_itemsCreateManyMenu_categoriesInput | menu_itemsCreateManyMenu_categoriesInput[]
    skipDuplicates?: boolean
  }

  export type menu_itemsUpsertWithWhereUniqueWithoutMenu_categoriesInput = {
    where: menu_itemsWhereUniqueInput
    update: XOR<menu_itemsUpdateWithoutMenu_categoriesInput, menu_itemsUncheckedUpdateWithoutMenu_categoriesInput>
    create: XOR<menu_itemsCreateWithoutMenu_categoriesInput, menu_itemsUncheckedCreateWithoutMenu_categoriesInput>
  }

  export type menu_itemsUpdateWithWhereUniqueWithoutMenu_categoriesInput = {
    where: menu_itemsWhereUniqueInput
    data: XOR<menu_itemsUpdateWithoutMenu_categoriesInput, menu_itemsUncheckedUpdateWithoutMenu_categoriesInput>
  }

  export type menu_itemsUpdateManyWithWhereWithoutMenu_categoriesInput = {
    where: menu_itemsScalarWhereInput
    data: XOR<menu_itemsUpdateManyMutationInput, menu_itemsUncheckedUpdateManyWithoutMenu_categoriesInput>
  }

  export type menu_itemsScalarWhereInput = {
    AND?: menu_itemsScalarWhereInput | menu_itemsScalarWhereInput[]
    OR?: menu_itemsScalarWhereInput[]
    NOT?: menu_itemsScalarWhereInput | menu_itemsScalarWhereInput[]
    id?: IntFilter<"menu_items"> | number
    name?: StringFilter<"menu_items"> | string
    description?: StringNullableFilter<"menu_items"> | string | null
    category_id?: IntNullableFilter<"menu_items"> | number | null
    price?: DecimalFilter<"menu_items"> | Decimal | DecimalJsLike | number | string
    is_available?: BoolNullableFilter<"menu_items"> | boolean | null
    created_at?: DateTimeNullableFilter<"menu_items"> | Date | string | null
    image_url?: StringNullableFilter<"menu_items"> | string | null
  }

  export type menu_categoriesCreateWithoutMenu_itemsInput = {
    name: string
    description?: string | null
    created_at?: Date | string | null
  }

  export type menu_categoriesUncheckedCreateWithoutMenu_itemsInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
  }

  export type menu_categoriesCreateOrConnectWithoutMenu_itemsInput = {
    where: menu_categoriesWhereUniqueInput
    create: XOR<menu_categoriesCreateWithoutMenu_itemsInput, menu_categoriesUncheckedCreateWithoutMenu_itemsInput>
  }

  export type order_linesCreateWithoutMenu_itemsInput = {
    quantity: number
    price_at_sale: Decimal | DecimalJsLike | number | string
    line_total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    orders: ordersCreateNestedOneWithoutOrder_linesInput
  }

  export type order_linesUncheckedCreateWithoutMenu_itemsInput = {
    id?: number
    order_id: number
    quantity: number
    price_at_sale: Decimal | DecimalJsLike | number | string
    line_total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type order_linesCreateOrConnectWithoutMenu_itemsInput = {
    where: order_linesWhereUniqueInput
    create: XOR<order_linesCreateWithoutMenu_itemsInput, order_linesUncheckedCreateWithoutMenu_itemsInput>
  }

  export type order_linesCreateManyMenu_itemsInputEnvelope = {
    data: order_linesCreateManyMenu_itemsInput | order_linesCreateManyMenu_itemsInput[]
    skipDuplicates?: boolean
  }

  export type recipe_itemsCreateWithoutMenu_itemsInput = {
    quantity: Decimal | DecimalJsLike | number | string
    stock_items: stock_itemsCreateNestedOneWithoutRecipe_itemsInput
  }

  export type recipe_itemsUncheckedCreateWithoutMenu_itemsInput = {
    id?: number
    stock_item_id: number
    quantity: Decimal | DecimalJsLike | number | string
  }

  export type recipe_itemsCreateOrConnectWithoutMenu_itemsInput = {
    where: recipe_itemsWhereUniqueInput
    create: XOR<recipe_itemsCreateWithoutMenu_itemsInput, recipe_itemsUncheckedCreateWithoutMenu_itemsInput>
  }

  export type recipe_itemsCreateManyMenu_itemsInputEnvelope = {
    data: recipe_itemsCreateManyMenu_itemsInput | recipe_itemsCreateManyMenu_itemsInput[]
    skipDuplicates?: boolean
  }

  export type menu_categoriesUpsertWithoutMenu_itemsInput = {
    update: XOR<menu_categoriesUpdateWithoutMenu_itemsInput, menu_categoriesUncheckedUpdateWithoutMenu_itemsInput>
    create: XOR<menu_categoriesCreateWithoutMenu_itemsInput, menu_categoriesUncheckedCreateWithoutMenu_itemsInput>
    where?: menu_categoriesWhereInput
  }

  export type menu_categoriesUpdateToOneWithWhereWithoutMenu_itemsInput = {
    where?: menu_categoriesWhereInput
    data: XOR<menu_categoriesUpdateWithoutMenu_itemsInput, menu_categoriesUncheckedUpdateWithoutMenu_itemsInput>
  }

  export type menu_categoriesUpdateWithoutMenu_itemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type menu_categoriesUncheckedUpdateWithoutMenu_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_linesUpsertWithWhereUniqueWithoutMenu_itemsInput = {
    where: order_linesWhereUniqueInput
    update: XOR<order_linesUpdateWithoutMenu_itemsInput, order_linesUncheckedUpdateWithoutMenu_itemsInput>
    create: XOR<order_linesCreateWithoutMenu_itemsInput, order_linesUncheckedCreateWithoutMenu_itemsInput>
  }

  export type order_linesUpdateWithWhereUniqueWithoutMenu_itemsInput = {
    where: order_linesWhereUniqueInput
    data: XOR<order_linesUpdateWithoutMenu_itemsInput, order_linesUncheckedUpdateWithoutMenu_itemsInput>
  }

  export type order_linesUpdateManyWithWhereWithoutMenu_itemsInput = {
    where: order_linesScalarWhereInput
    data: XOR<order_linesUpdateManyMutationInput, order_linesUncheckedUpdateManyWithoutMenu_itemsInput>
  }

  export type order_linesScalarWhereInput = {
    AND?: order_linesScalarWhereInput | order_linesScalarWhereInput[]
    OR?: order_linesScalarWhereInput[]
    NOT?: order_linesScalarWhereInput | order_linesScalarWhereInput[]
    id?: IntFilter<"order_lines"> | number
    order_id?: IntFilter<"order_lines"> | number
    menu_item_id?: IntFilter<"order_lines"> | number
    quantity?: IntFilter<"order_lines"> | number
    price_at_sale?: DecimalFilter<"order_lines"> | Decimal | DecimalJsLike | number | string
    line_total?: DecimalFilter<"order_lines"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"order_lines"> | Date | string | null
  }

  export type recipe_itemsUpsertWithWhereUniqueWithoutMenu_itemsInput = {
    where: recipe_itemsWhereUniqueInput
    update: XOR<recipe_itemsUpdateWithoutMenu_itemsInput, recipe_itemsUncheckedUpdateWithoutMenu_itemsInput>
    create: XOR<recipe_itemsCreateWithoutMenu_itemsInput, recipe_itemsUncheckedCreateWithoutMenu_itemsInput>
  }

  export type recipe_itemsUpdateWithWhereUniqueWithoutMenu_itemsInput = {
    where: recipe_itemsWhereUniqueInput
    data: XOR<recipe_itemsUpdateWithoutMenu_itemsInput, recipe_itemsUncheckedUpdateWithoutMenu_itemsInput>
  }

  export type recipe_itemsUpdateManyWithWhereWithoutMenu_itemsInput = {
    where: recipe_itemsScalarWhereInput
    data: XOR<recipe_itemsUpdateManyMutationInput, recipe_itemsUncheckedUpdateManyWithoutMenu_itemsInput>
  }

  export type recipe_itemsScalarWhereInput = {
    AND?: recipe_itemsScalarWhereInput | recipe_itemsScalarWhereInput[]
    OR?: recipe_itemsScalarWhereInput[]
    NOT?: recipe_itemsScalarWhereInput | recipe_itemsScalarWhereInput[]
    id?: IntFilter<"recipe_items"> | number
    menu_item_id?: IntFilter<"recipe_items"> | number
    stock_item_id?: IntFilter<"recipe_items"> | number
    quantity?: DecimalFilter<"recipe_items"> | Decimal | DecimalJsLike | number | string
  }

  export type menu_itemsCreateWithoutOrder_linesInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    is_available?: boolean | null
    created_at?: Date | string | null
    image_url?: string | null
    menu_categories?: menu_categoriesCreateNestedOneWithoutMenu_itemsInput
    recipe_items?: recipe_itemsCreateNestedManyWithoutMenu_itemsInput
  }

  export type menu_itemsUncheckedCreateWithoutOrder_linesInput = {
    id?: number
    name: string
    description?: string | null
    category_id?: number | null
    price: Decimal | DecimalJsLike | number | string
    is_available?: boolean | null
    created_at?: Date | string | null
    image_url?: string | null
    recipe_items?: recipe_itemsUncheckedCreateNestedManyWithoutMenu_itemsInput
  }

  export type menu_itemsCreateOrConnectWithoutOrder_linesInput = {
    where: menu_itemsWhereUniqueInput
    create: XOR<menu_itemsCreateWithoutOrder_linesInput, menu_itemsUncheckedCreateWithoutOrder_linesInput>
  }

  export type ordersCreateWithoutOrder_linesInput = {
    table_number?: string | null
    order_type?: string | null
    status?: $Enums.order_status | null
    total?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    created_at?: Date | string | null
    clients?: clientsCreateNestedOneWithoutOrdersInput
    users?: usersCreateNestedOneWithoutOrdersInput
    payments?: paymentsCreateNestedManyWithoutOrdersInput
    stock_movements?: stock_movementsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutOrder_linesInput = {
    id?: number
    client_id?: number | null
    table_number?: string | null
    order_type?: string | null
    status?: $Enums.order_status | null
    total?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    payments?: paymentsUncheckedCreateNestedManyWithoutOrdersInput
    stock_movements?: stock_movementsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutOrder_linesInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_linesInput, ordersUncheckedCreateWithoutOrder_linesInput>
  }

  export type menu_itemsUpsertWithoutOrder_linesInput = {
    update: XOR<menu_itemsUpdateWithoutOrder_linesInput, menu_itemsUncheckedUpdateWithoutOrder_linesInput>
    create: XOR<menu_itemsCreateWithoutOrder_linesInput, menu_itemsUncheckedCreateWithoutOrder_linesInput>
    where?: menu_itemsWhereInput
  }

  export type menu_itemsUpdateToOneWithWhereWithoutOrder_linesInput = {
    where?: menu_itemsWhereInput
    data: XOR<menu_itemsUpdateWithoutOrder_linesInput, menu_itemsUncheckedUpdateWithoutOrder_linesInput>
  }

  export type menu_itemsUpdateWithoutOrder_linesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    menu_categories?: menu_categoriesUpdateOneWithoutMenu_itemsNestedInput
    recipe_items?: recipe_itemsUpdateManyWithoutMenu_itemsNestedInput
  }

  export type menu_itemsUncheckedUpdateWithoutOrder_linesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    recipe_items?: recipe_itemsUncheckedUpdateManyWithoutMenu_itemsNestedInput
  }

  export type ordersUpsertWithoutOrder_linesInput = {
    update: XOR<ordersUpdateWithoutOrder_linesInput, ordersUncheckedUpdateWithoutOrder_linesInput>
    create: XOR<ordersCreateWithoutOrder_linesInput, ordersUncheckedCreateWithoutOrder_linesInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrder_linesInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrder_linesInput, ordersUncheckedUpdateWithoutOrder_linesInput>
  }

  export type ordersUpdateWithoutOrder_linesInput = {
    table_number?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorder_statusFieldUpdateOperationsInput | $Enums.order_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clients?: clientsUpdateOneWithoutOrdersNestedInput
    users?: usersUpdateOneWithoutOrdersNestedInput
    payments?: paymentsUpdateManyWithoutOrdersNestedInput
    stock_movements?: stock_movementsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutOrder_linesInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_number?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorder_statusFieldUpdateOperationsInput | $Enums.order_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    payments?: paymentsUncheckedUpdateManyWithoutOrdersNestedInput
    stock_movements?: stock_movementsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type order_linesCreateWithoutOrdersInput = {
    quantity: number
    price_at_sale: Decimal | DecimalJsLike | number | string
    line_total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    menu_items: menu_itemsCreateNestedOneWithoutOrder_linesInput
  }

  export type order_linesUncheckedCreateWithoutOrdersInput = {
    id?: number
    menu_item_id: number
    quantity: number
    price_at_sale: Decimal | DecimalJsLike | number | string
    line_total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type order_linesCreateOrConnectWithoutOrdersInput = {
    where: order_linesWhereUniqueInput
    create: XOR<order_linesCreateWithoutOrdersInput, order_linesUncheckedCreateWithoutOrdersInput>
  }

  export type order_linesCreateManyOrdersInputEnvelope = {
    data: order_linesCreateManyOrdersInput | order_linesCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type clientsCreateWithoutOrdersInput = {
    name: string
    phone?: string | null
    email?: string | null
    created_at?: Date | string | null
  }

  export type clientsUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    phone?: string | null
    email?: string | null
    created_at?: Date | string | null
  }

  export type clientsCreateOrConnectWithoutOrdersInput = {
    where: clientsWhereUniqueInput
    create: XOR<clientsCreateWithoutOrdersInput, clientsUncheckedCreateWithoutOrdersInput>
  }

  export type usersCreateWithoutOrdersInput = {
    username: string
    email?: string | null
    full_name?: string | null
    password_hash: string
    role?: string
    is_active?: boolean | null
    created_at?: Date | string | null
    expenses?: expensesCreateNestedManyWithoutUsersInput
    payments?: paymentsCreateNestedManyWithoutUsersInput
    stock_movements?: stock_movementsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOrdersInput = {
    id?: number
    username: string
    email?: string | null
    full_name?: string | null
    password_hash: string
    role?: string
    is_active?: boolean | null
    created_at?: Date | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    payments?: paymentsUncheckedCreateNestedManyWithoutUsersInput
    stock_movements?: stock_movementsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutOrdersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
  }

  export type paymentsCreateWithoutOrdersInput = {
    method: $Enums.payment_method
    amount: Decimal | DecimalJsLike | number | string
    reference?: string | null
    paid_at?: Date | string | null
    users?: usersCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUncheckedCreateWithoutOrdersInput = {
    id?: number
    method: $Enums.payment_method
    amount: Decimal | DecimalJsLike | number | string
    reference?: string | null
    paid_at?: Date | string | null
    created_by?: number | null
  }

  export type paymentsCreateOrConnectWithoutOrdersInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutOrdersInput, paymentsUncheckedCreateWithoutOrdersInput>
  }

  export type paymentsCreateManyOrdersInputEnvelope = {
    data: paymentsCreateManyOrdersInput | paymentsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type stock_movementsCreateWithoutOrdersInput = {
    movement_type: $Enums.stock_movement_type
    quantity: Decimal | DecimalJsLike | number | string
    notes?: string | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutStock_movementsInput
    stock_items: stock_itemsCreateNestedOneWithoutStock_movementsInput
  }

  export type stock_movementsUncheckedCreateWithoutOrdersInput = {
    id?: number
    stock_item_id: number
    movement_type: $Enums.stock_movement_type
    quantity: Decimal | DecimalJsLike | number | string
    notes?: string | null
    created_at?: Date | string | null
    created_by?: number | null
  }

  export type stock_movementsCreateOrConnectWithoutOrdersInput = {
    where: stock_movementsWhereUniqueInput
    create: XOR<stock_movementsCreateWithoutOrdersInput, stock_movementsUncheckedCreateWithoutOrdersInput>
  }

  export type stock_movementsCreateManyOrdersInputEnvelope = {
    data: stock_movementsCreateManyOrdersInput | stock_movementsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type order_linesUpsertWithWhereUniqueWithoutOrdersInput = {
    where: order_linesWhereUniqueInput
    update: XOR<order_linesUpdateWithoutOrdersInput, order_linesUncheckedUpdateWithoutOrdersInput>
    create: XOR<order_linesCreateWithoutOrdersInput, order_linesUncheckedCreateWithoutOrdersInput>
  }

  export type order_linesUpdateWithWhereUniqueWithoutOrdersInput = {
    where: order_linesWhereUniqueInput
    data: XOR<order_linesUpdateWithoutOrdersInput, order_linesUncheckedUpdateWithoutOrdersInput>
  }

  export type order_linesUpdateManyWithWhereWithoutOrdersInput = {
    where: order_linesScalarWhereInput
    data: XOR<order_linesUpdateManyMutationInput, order_linesUncheckedUpdateManyWithoutOrdersInput>
  }

  export type clientsUpsertWithoutOrdersInput = {
    update: XOR<clientsUpdateWithoutOrdersInput, clientsUncheckedUpdateWithoutOrdersInput>
    create: XOR<clientsCreateWithoutOrdersInput, clientsUncheckedCreateWithoutOrdersInput>
    where?: clientsWhereInput
  }

  export type clientsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: clientsWhereInput
    data: XOR<clientsUpdateWithoutOrdersInput, clientsUncheckedUpdateWithoutOrdersInput>
  }

  export type clientsUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clientsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutOrdersInput = {
    update: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type usersUpdateWithoutOrdersInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    payments?: paymentsUpdateManyWithoutUsersNestedInput
    stock_movements?: stock_movementsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutUsersNestedInput
    stock_movements?: stock_movementsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type paymentsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: paymentsWhereUniqueInput
    update: XOR<paymentsUpdateWithoutOrdersInput, paymentsUncheckedUpdateWithoutOrdersInput>
    create: XOR<paymentsCreateWithoutOrdersInput, paymentsUncheckedCreateWithoutOrdersInput>
  }

  export type paymentsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: paymentsWhereUniqueInput
    data: XOR<paymentsUpdateWithoutOrdersInput, paymentsUncheckedUpdateWithoutOrdersInput>
  }

  export type paymentsUpdateManyWithWhereWithoutOrdersInput = {
    where: paymentsScalarWhereInput
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type paymentsScalarWhereInput = {
    AND?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    OR?: paymentsScalarWhereInput[]
    NOT?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    id?: IntFilter<"payments"> | number
    order_id?: IntFilter<"payments"> | number
    method?: Enumpayment_methodFilter<"payments"> | $Enums.payment_method
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    reference?: StringNullableFilter<"payments"> | string | null
    paid_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    created_by?: IntNullableFilter<"payments"> | number | null
  }

  export type stock_movementsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: stock_movementsWhereUniqueInput
    update: XOR<stock_movementsUpdateWithoutOrdersInput, stock_movementsUncheckedUpdateWithoutOrdersInput>
    create: XOR<stock_movementsCreateWithoutOrdersInput, stock_movementsUncheckedCreateWithoutOrdersInput>
  }

  export type stock_movementsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: stock_movementsWhereUniqueInput
    data: XOR<stock_movementsUpdateWithoutOrdersInput, stock_movementsUncheckedUpdateWithoutOrdersInput>
  }

  export type stock_movementsUpdateManyWithWhereWithoutOrdersInput = {
    where: stock_movementsScalarWhereInput
    data: XOR<stock_movementsUpdateManyMutationInput, stock_movementsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type stock_movementsScalarWhereInput = {
    AND?: stock_movementsScalarWhereInput | stock_movementsScalarWhereInput[]
    OR?: stock_movementsScalarWhereInput[]
    NOT?: stock_movementsScalarWhereInput | stock_movementsScalarWhereInput[]
    id?: IntFilter<"stock_movements"> | number
    stock_item_id?: IntFilter<"stock_movements"> | number
    movement_type?: Enumstock_movement_typeFilter<"stock_movements"> | $Enums.stock_movement_type
    quantity?: DecimalFilter<"stock_movements"> | Decimal | DecimalJsLike | number | string
    related_order_id?: IntNullableFilter<"stock_movements"> | number | null
    notes?: StringNullableFilter<"stock_movements"> | string | null
    created_at?: DateTimeNullableFilter<"stock_movements"> | Date | string | null
    created_by?: IntNullableFilter<"stock_movements"> | number | null
  }

  export type usersCreateWithoutPaymentsInput = {
    username: string
    email?: string | null
    full_name?: string | null
    password_hash: string
    role?: string
    is_active?: boolean | null
    created_at?: Date | string | null
    expenses?: expensesCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
    stock_movements?: stock_movementsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPaymentsInput = {
    id?: number
    username: string
    email?: string | null
    full_name?: string | null
    password_hash: string
    role?: string
    is_active?: boolean | null
    created_at?: Date | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    stock_movements?: stock_movementsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPaymentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPaymentsInput, usersUncheckedCreateWithoutPaymentsInput>
  }

  export type ordersCreateWithoutPaymentsInput = {
    table_number?: string | null
    order_type?: string | null
    status?: $Enums.order_status | null
    total?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    created_at?: Date | string | null
    order_lines?: order_linesCreateNestedManyWithoutOrdersInput
    clients?: clientsCreateNestedOneWithoutOrdersInput
    users?: usersCreateNestedOneWithoutOrdersInput
    stock_movements?: stock_movementsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutPaymentsInput = {
    id?: number
    client_id?: number | null
    table_number?: string | null
    order_type?: string | null
    status?: $Enums.order_status | null
    total?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    order_lines?: order_linesUncheckedCreateNestedManyWithoutOrdersInput
    stock_movements?: stock_movementsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutPaymentsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutPaymentsInput, ordersUncheckedCreateWithoutPaymentsInput>
  }

  export type usersUpsertWithoutPaymentsInput = {
    update: XOR<usersUpdateWithoutPaymentsInput, usersUncheckedUpdateWithoutPaymentsInput>
    create: XOR<usersCreateWithoutPaymentsInput, usersUncheckedCreateWithoutPaymentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPaymentsInput, usersUncheckedUpdateWithoutPaymentsInput>
  }

  export type usersUpdateWithoutPaymentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
    stock_movements?: stock_movementsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    stock_movements?: stock_movementsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ordersUpsertWithoutPaymentsInput = {
    update: XOR<ordersUpdateWithoutPaymentsInput, ordersUncheckedUpdateWithoutPaymentsInput>
    create: XOR<ordersCreateWithoutPaymentsInput, ordersUncheckedCreateWithoutPaymentsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutPaymentsInput, ordersUncheckedUpdateWithoutPaymentsInput>
  }

  export type ordersUpdateWithoutPaymentsInput = {
    table_number?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorder_statusFieldUpdateOperationsInput | $Enums.order_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_lines?: order_linesUpdateManyWithoutOrdersNestedInput
    clients?: clientsUpdateOneWithoutOrdersNestedInput
    users?: usersUpdateOneWithoutOrdersNestedInput
    stock_movements?: stock_movementsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_number?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorder_statusFieldUpdateOperationsInput | $Enums.order_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    order_lines?: order_linesUncheckedUpdateManyWithoutOrdersNestedInput
    stock_movements?: stock_movementsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type menu_itemsCreateWithoutRecipe_itemsInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    is_available?: boolean | null
    created_at?: Date | string | null
    image_url?: string | null
    menu_categories?: menu_categoriesCreateNestedOneWithoutMenu_itemsInput
    order_lines?: order_linesCreateNestedManyWithoutMenu_itemsInput
  }

  export type menu_itemsUncheckedCreateWithoutRecipe_itemsInput = {
    id?: number
    name: string
    description?: string | null
    category_id?: number | null
    price: Decimal | DecimalJsLike | number | string
    is_available?: boolean | null
    created_at?: Date | string | null
    image_url?: string | null
    order_lines?: order_linesUncheckedCreateNestedManyWithoutMenu_itemsInput
  }

  export type menu_itemsCreateOrConnectWithoutRecipe_itemsInput = {
    where: menu_itemsWhereUniqueInput
    create: XOR<menu_itemsCreateWithoutRecipe_itemsInput, menu_itemsUncheckedCreateWithoutRecipe_itemsInput>
  }

  export type stock_itemsCreateWithoutRecipe_itemsInput = {
    name: string
    unit: string
    quantity?: Decimal | DecimalJsLike | number | string | null
    min_alert_level?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    stock_movements?: stock_movementsCreateNestedManyWithoutStock_itemsInput
  }

  export type stock_itemsUncheckedCreateWithoutRecipe_itemsInput = {
    id?: number
    name: string
    unit: string
    quantity?: Decimal | DecimalJsLike | number | string | null
    min_alert_level?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    stock_movements?: stock_movementsUncheckedCreateNestedManyWithoutStock_itemsInput
  }

  export type stock_itemsCreateOrConnectWithoutRecipe_itemsInput = {
    where: stock_itemsWhereUniqueInput
    create: XOR<stock_itemsCreateWithoutRecipe_itemsInput, stock_itemsUncheckedCreateWithoutRecipe_itemsInput>
  }

  export type menu_itemsUpsertWithoutRecipe_itemsInput = {
    update: XOR<menu_itemsUpdateWithoutRecipe_itemsInput, menu_itemsUncheckedUpdateWithoutRecipe_itemsInput>
    create: XOR<menu_itemsCreateWithoutRecipe_itemsInput, menu_itemsUncheckedCreateWithoutRecipe_itemsInput>
    where?: menu_itemsWhereInput
  }

  export type menu_itemsUpdateToOneWithWhereWithoutRecipe_itemsInput = {
    where?: menu_itemsWhereInput
    data: XOR<menu_itemsUpdateWithoutRecipe_itemsInput, menu_itemsUncheckedUpdateWithoutRecipe_itemsInput>
  }

  export type menu_itemsUpdateWithoutRecipe_itemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    menu_categories?: menu_categoriesUpdateOneWithoutMenu_itemsNestedInput
    order_lines?: order_linesUpdateManyWithoutMenu_itemsNestedInput
  }

  export type menu_itemsUncheckedUpdateWithoutRecipe_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    order_lines?: order_linesUncheckedUpdateManyWithoutMenu_itemsNestedInput
  }

  export type stock_itemsUpsertWithoutRecipe_itemsInput = {
    update: XOR<stock_itemsUpdateWithoutRecipe_itemsInput, stock_itemsUncheckedUpdateWithoutRecipe_itemsInput>
    create: XOR<stock_itemsCreateWithoutRecipe_itemsInput, stock_itemsUncheckedCreateWithoutRecipe_itemsInput>
    where?: stock_itemsWhereInput
  }

  export type stock_itemsUpdateToOneWithWhereWithoutRecipe_itemsInput = {
    where?: stock_itemsWhereInput
    data: XOR<stock_itemsUpdateWithoutRecipe_itemsInput, stock_itemsUncheckedUpdateWithoutRecipe_itemsInput>
  }

  export type stock_itemsUpdateWithoutRecipe_itemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_alert_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock_movements?: stock_movementsUpdateManyWithoutStock_itemsNestedInput
  }

  export type stock_itemsUncheckedUpdateWithoutRecipe_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_alert_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock_movements?: stock_movementsUncheckedUpdateManyWithoutStock_itemsNestedInput
  }

  export type recipe_itemsCreateWithoutStock_itemsInput = {
    quantity: Decimal | DecimalJsLike | number | string
    menu_items: menu_itemsCreateNestedOneWithoutRecipe_itemsInput
  }

  export type recipe_itemsUncheckedCreateWithoutStock_itemsInput = {
    id?: number
    menu_item_id: number
    quantity: Decimal | DecimalJsLike | number | string
  }

  export type recipe_itemsCreateOrConnectWithoutStock_itemsInput = {
    where: recipe_itemsWhereUniqueInput
    create: XOR<recipe_itemsCreateWithoutStock_itemsInput, recipe_itemsUncheckedCreateWithoutStock_itemsInput>
  }

  export type recipe_itemsCreateManyStock_itemsInputEnvelope = {
    data: recipe_itemsCreateManyStock_itemsInput | recipe_itemsCreateManyStock_itemsInput[]
    skipDuplicates?: boolean
  }

  export type stock_movementsCreateWithoutStock_itemsInput = {
    movement_type: $Enums.stock_movement_type
    quantity: Decimal | DecimalJsLike | number | string
    notes?: string | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutStock_movementsInput
    orders?: ordersCreateNestedOneWithoutStock_movementsInput
  }

  export type stock_movementsUncheckedCreateWithoutStock_itemsInput = {
    id?: number
    movement_type: $Enums.stock_movement_type
    quantity: Decimal | DecimalJsLike | number | string
    related_order_id?: number | null
    notes?: string | null
    created_at?: Date | string | null
    created_by?: number | null
  }

  export type stock_movementsCreateOrConnectWithoutStock_itemsInput = {
    where: stock_movementsWhereUniqueInput
    create: XOR<stock_movementsCreateWithoutStock_itemsInput, stock_movementsUncheckedCreateWithoutStock_itemsInput>
  }

  export type stock_movementsCreateManyStock_itemsInputEnvelope = {
    data: stock_movementsCreateManyStock_itemsInput | stock_movementsCreateManyStock_itemsInput[]
    skipDuplicates?: boolean
  }

  export type recipe_itemsUpsertWithWhereUniqueWithoutStock_itemsInput = {
    where: recipe_itemsWhereUniqueInput
    update: XOR<recipe_itemsUpdateWithoutStock_itemsInput, recipe_itemsUncheckedUpdateWithoutStock_itemsInput>
    create: XOR<recipe_itemsCreateWithoutStock_itemsInput, recipe_itemsUncheckedCreateWithoutStock_itemsInput>
  }

  export type recipe_itemsUpdateWithWhereUniqueWithoutStock_itemsInput = {
    where: recipe_itemsWhereUniqueInput
    data: XOR<recipe_itemsUpdateWithoutStock_itemsInput, recipe_itemsUncheckedUpdateWithoutStock_itemsInput>
  }

  export type recipe_itemsUpdateManyWithWhereWithoutStock_itemsInput = {
    where: recipe_itemsScalarWhereInput
    data: XOR<recipe_itemsUpdateManyMutationInput, recipe_itemsUncheckedUpdateManyWithoutStock_itemsInput>
  }

  export type stock_movementsUpsertWithWhereUniqueWithoutStock_itemsInput = {
    where: stock_movementsWhereUniqueInput
    update: XOR<stock_movementsUpdateWithoutStock_itemsInput, stock_movementsUncheckedUpdateWithoutStock_itemsInput>
    create: XOR<stock_movementsCreateWithoutStock_itemsInput, stock_movementsUncheckedCreateWithoutStock_itemsInput>
  }

  export type stock_movementsUpdateWithWhereUniqueWithoutStock_itemsInput = {
    where: stock_movementsWhereUniqueInput
    data: XOR<stock_movementsUpdateWithoutStock_itemsInput, stock_movementsUncheckedUpdateWithoutStock_itemsInput>
  }

  export type stock_movementsUpdateManyWithWhereWithoutStock_itemsInput = {
    where: stock_movementsScalarWhereInput
    data: XOR<stock_movementsUpdateManyMutationInput, stock_movementsUncheckedUpdateManyWithoutStock_itemsInput>
  }

  export type usersCreateWithoutStock_movementsInput = {
    username: string
    email?: string | null
    full_name?: string | null
    password_hash: string
    role?: string
    is_active?: boolean | null
    created_at?: Date | string | null
    expenses?: expensesCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
    payments?: paymentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutStock_movementsInput = {
    id?: number
    username: string
    email?: string | null
    full_name?: string | null
    password_hash: string
    role?: string
    is_active?: boolean | null
    created_at?: Date | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    payments?: paymentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutStock_movementsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutStock_movementsInput, usersUncheckedCreateWithoutStock_movementsInput>
  }

  export type ordersCreateWithoutStock_movementsInput = {
    table_number?: string | null
    order_type?: string | null
    status?: $Enums.order_status | null
    total?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    created_at?: Date | string | null
    order_lines?: order_linesCreateNestedManyWithoutOrdersInput
    clients?: clientsCreateNestedOneWithoutOrdersInput
    users?: usersCreateNestedOneWithoutOrdersInput
    payments?: paymentsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutStock_movementsInput = {
    id?: number
    client_id?: number | null
    table_number?: string | null
    order_type?: string | null
    status?: $Enums.order_status | null
    total?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    order_lines?: order_linesUncheckedCreateNestedManyWithoutOrdersInput
    payments?: paymentsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutStock_movementsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutStock_movementsInput, ordersUncheckedCreateWithoutStock_movementsInput>
  }

  export type stock_itemsCreateWithoutStock_movementsInput = {
    name: string
    unit: string
    quantity?: Decimal | DecimalJsLike | number | string | null
    min_alert_level?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    recipe_items?: recipe_itemsCreateNestedManyWithoutStock_itemsInput
  }

  export type stock_itemsUncheckedCreateWithoutStock_movementsInput = {
    id?: number
    name: string
    unit: string
    quantity?: Decimal | DecimalJsLike | number | string | null
    min_alert_level?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    recipe_items?: recipe_itemsUncheckedCreateNestedManyWithoutStock_itemsInput
  }

  export type stock_itemsCreateOrConnectWithoutStock_movementsInput = {
    where: stock_itemsWhereUniqueInput
    create: XOR<stock_itemsCreateWithoutStock_movementsInput, stock_itemsUncheckedCreateWithoutStock_movementsInput>
  }

  export type usersUpsertWithoutStock_movementsInput = {
    update: XOR<usersUpdateWithoutStock_movementsInput, usersUncheckedUpdateWithoutStock_movementsInput>
    create: XOR<usersCreateWithoutStock_movementsInput, usersUncheckedCreateWithoutStock_movementsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutStock_movementsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutStock_movementsInput, usersUncheckedUpdateWithoutStock_movementsInput>
  }

  export type usersUpdateWithoutStock_movementsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
    payments?: paymentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutStock_movementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ordersUpsertWithoutStock_movementsInput = {
    update: XOR<ordersUpdateWithoutStock_movementsInput, ordersUncheckedUpdateWithoutStock_movementsInput>
    create: XOR<ordersCreateWithoutStock_movementsInput, ordersUncheckedCreateWithoutStock_movementsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutStock_movementsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutStock_movementsInput, ordersUncheckedUpdateWithoutStock_movementsInput>
  }

  export type ordersUpdateWithoutStock_movementsInput = {
    table_number?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorder_statusFieldUpdateOperationsInput | $Enums.order_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_lines?: order_linesUpdateManyWithoutOrdersNestedInput
    clients?: clientsUpdateOneWithoutOrdersNestedInput
    users?: usersUpdateOneWithoutOrdersNestedInput
    payments?: paymentsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutStock_movementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_number?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorder_statusFieldUpdateOperationsInput | $Enums.order_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    order_lines?: order_linesUncheckedUpdateManyWithoutOrdersNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type stock_itemsUpsertWithoutStock_movementsInput = {
    update: XOR<stock_itemsUpdateWithoutStock_movementsInput, stock_itemsUncheckedUpdateWithoutStock_movementsInput>
    create: XOR<stock_itemsCreateWithoutStock_movementsInput, stock_itemsUncheckedCreateWithoutStock_movementsInput>
    where?: stock_itemsWhereInput
  }

  export type stock_itemsUpdateToOneWithWhereWithoutStock_movementsInput = {
    where?: stock_itemsWhereInput
    data: XOR<stock_itemsUpdateWithoutStock_movementsInput, stock_itemsUncheckedUpdateWithoutStock_movementsInput>
  }

  export type stock_itemsUpdateWithoutStock_movementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_alert_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipe_items?: recipe_itemsUpdateManyWithoutStock_itemsNestedInput
  }

  export type stock_itemsUncheckedUpdateWithoutStock_movementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_alert_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipe_items?: recipe_itemsUncheckedUpdateManyWithoutStock_itemsNestedInput
  }

  export type expensesCreateWithoutUsersInput = {
    category: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    receipt_reference?: string | null
    incurred_at?: Date | string | null
  }

  export type expensesUncheckedCreateWithoutUsersInput = {
    id?: number
    category: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    receipt_reference?: string | null
    incurred_at?: Date | string | null
  }

  export type expensesCreateOrConnectWithoutUsersInput = {
    where: expensesWhereUniqueInput
    create: XOR<expensesCreateWithoutUsersInput, expensesUncheckedCreateWithoutUsersInput>
  }

  export type expensesCreateManyUsersInputEnvelope = {
    data: expensesCreateManyUsersInput | expensesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ordersCreateWithoutUsersInput = {
    table_number?: string | null
    order_type?: string | null
    status?: $Enums.order_status | null
    total?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    created_at?: Date | string | null
    order_lines?: order_linesCreateNestedManyWithoutOrdersInput
    clients?: clientsCreateNestedOneWithoutOrdersInput
    payments?: paymentsCreateNestedManyWithoutOrdersInput
    stock_movements?: stock_movementsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutUsersInput = {
    id?: number
    client_id?: number | null
    table_number?: string | null
    order_type?: string | null
    status?: $Enums.order_status | null
    total?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    created_at?: Date | string | null
    order_lines?: order_linesUncheckedCreateNestedManyWithoutOrdersInput
    payments?: paymentsUncheckedCreateNestedManyWithoutOrdersInput
    stock_movements?: stock_movementsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutUsersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersCreateManyUsersInputEnvelope = {
    data: ordersCreateManyUsersInput | ordersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type paymentsCreateWithoutUsersInput = {
    method: $Enums.payment_method
    amount: Decimal | DecimalJsLike | number | string
    reference?: string | null
    paid_at?: Date | string | null
    orders: ordersCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUncheckedCreateWithoutUsersInput = {
    id?: number
    order_id: number
    method: $Enums.payment_method
    amount: Decimal | DecimalJsLike | number | string
    reference?: string | null
    paid_at?: Date | string | null
  }

  export type paymentsCreateOrConnectWithoutUsersInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutUsersInput, paymentsUncheckedCreateWithoutUsersInput>
  }

  export type paymentsCreateManyUsersInputEnvelope = {
    data: paymentsCreateManyUsersInput | paymentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type stock_movementsCreateWithoutUsersInput = {
    movement_type: $Enums.stock_movement_type
    quantity: Decimal | DecimalJsLike | number | string
    notes?: string | null
    created_at?: Date | string | null
    orders?: ordersCreateNestedOneWithoutStock_movementsInput
    stock_items: stock_itemsCreateNestedOneWithoutStock_movementsInput
  }

  export type stock_movementsUncheckedCreateWithoutUsersInput = {
    id?: number
    stock_item_id: number
    movement_type: $Enums.stock_movement_type
    quantity: Decimal | DecimalJsLike | number | string
    related_order_id?: number | null
    notes?: string | null
    created_at?: Date | string | null
  }

  export type stock_movementsCreateOrConnectWithoutUsersInput = {
    where: stock_movementsWhereUniqueInput
    create: XOR<stock_movementsCreateWithoutUsersInput, stock_movementsUncheckedCreateWithoutUsersInput>
  }

  export type stock_movementsCreateManyUsersInputEnvelope = {
    data: stock_movementsCreateManyUsersInput | stock_movementsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type expensesUpsertWithWhereUniqueWithoutUsersInput = {
    where: expensesWhereUniqueInput
    update: XOR<expensesUpdateWithoutUsersInput, expensesUncheckedUpdateWithoutUsersInput>
    create: XOR<expensesCreateWithoutUsersInput, expensesUncheckedCreateWithoutUsersInput>
  }

  export type expensesUpdateWithWhereUniqueWithoutUsersInput = {
    where: expensesWhereUniqueInput
    data: XOR<expensesUpdateWithoutUsersInput, expensesUncheckedUpdateWithoutUsersInput>
  }

  export type expensesUpdateManyWithWhereWithoutUsersInput = {
    where: expensesScalarWhereInput
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyWithoutUsersInput>
  }

  export type expensesScalarWhereInput = {
    AND?: expensesScalarWhereInput | expensesScalarWhereInput[]
    OR?: expensesScalarWhereInput[]
    NOT?: expensesScalarWhereInput | expensesScalarWhereInput[]
    id?: IntFilter<"expenses"> | number
    category?: StringFilter<"expenses"> | string
    amount?: DecimalFilter<"expenses"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"expenses"> | string
    receipt_reference?: StringNullableFilter<"expenses"> | string | null
    incurred_at?: DateTimeNullableFilter<"expenses"> | Date | string | null
    created_by?: IntNullableFilter<"expenses"> | number | null
  }

  export type ordersUpsertWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUpdateManyWithWhereWithoutUsersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutUsersInput>
  }

  export type paymentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: paymentsWhereUniqueInput
    update: XOR<paymentsUpdateWithoutUsersInput, paymentsUncheckedUpdateWithoutUsersInput>
    create: XOR<paymentsCreateWithoutUsersInput, paymentsUncheckedCreateWithoutUsersInput>
  }

  export type paymentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: paymentsWhereUniqueInput
    data: XOR<paymentsUpdateWithoutUsersInput, paymentsUncheckedUpdateWithoutUsersInput>
  }

  export type paymentsUpdateManyWithWhereWithoutUsersInput = {
    where: paymentsScalarWhereInput
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type stock_movementsUpsertWithWhereUniqueWithoutUsersInput = {
    where: stock_movementsWhereUniqueInput
    update: XOR<stock_movementsUpdateWithoutUsersInput, stock_movementsUncheckedUpdateWithoutUsersInput>
    create: XOR<stock_movementsCreateWithoutUsersInput, stock_movementsUncheckedCreateWithoutUsersInput>
  }

  export type stock_movementsUpdateWithWhereUniqueWithoutUsersInput = {
    where: stock_movementsWhereUniqueInput
    data: XOR<stock_movementsUpdateWithoutUsersInput, stock_movementsUncheckedUpdateWithoutUsersInput>
  }

  export type stock_movementsUpdateManyWithWhereWithoutUsersInput = {
    where: stock_movementsScalarWhereInput
    data: XOR<stock_movementsUpdateManyMutationInput, stock_movementsUncheckedUpdateManyWithoutUsersInput>
  }

  export type ordersCreateManyClientsInput = {
    id?: number
    table_number?: string | null
    order_type?: string | null
    status?: $Enums.order_status | null
    total?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    created_at?: Date | string | null
    created_by?: number | null
  }

  export type ordersUpdateWithoutClientsInput = {
    table_number?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorder_statusFieldUpdateOperationsInput | $Enums.order_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_lines?: order_linesUpdateManyWithoutOrdersNestedInput
    users?: usersUpdateOneWithoutOrdersNestedInput
    payments?: paymentsUpdateManyWithoutOrdersNestedInput
    stock_movements?: stock_movementsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_number?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorder_statusFieldUpdateOperationsInput | $Enums.order_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    order_lines?: order_linesUncheckedUpdateManyWithoutOrdersNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutOrdersNestedInput
    stock_movements?: stock_movementsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_number?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorder_statusFieldUpdateOperationsInput | $Enums.order_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type menu_itemsCreateManyMenu_categoriesInput = {
    id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    is_available?: boolean | null
    created_at?: Date | string | null
    image_url?: string | null
  }

  export type menu_itemsUpdateWithoutMenu_categoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    order_lines?: order_linesUpdateManyWithoutMenu_itemsNestedInput
    recipe_items?: recipe_itemsUpdateManyWithoutMenu_itemsNestedInput
  }

  export type menu_itemsUncheckedUpdateWithoutMenu_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    order_lines?: order_linesUncheckedUpdateManyWithoutMenu_itemsNestedInput
    recipe_items?: recipe_itemsUncheckedUpdateManyWithoutMenu_itemsNestedInput
  }

  export type menu_itemsUncheckedUpdateManyWithoutMenu_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type order_linesCreateManyMenu_itemsInput = {
    id?: number
    order_id: number
    quantity: number
    price_at_sale: Decimal | DecimalJsLike | number | string
    line_total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type recipe_itemsCreateManyMenu_itemsInput = {
    id?: number
    stock_item_id: number
    quantity: Decimal | DecimalJsLike | number | string
  }

  export type order_linesUpdateWithoutMenu_itemsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price_at_sale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    line_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateOneRequiredWithoutOrder_linesNestedInput
  }

  export type order_linesUncheckedUpdateWithoutMenu_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price_at_sale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    line_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_linesUncheckedUpdateManyWithoutMenu_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price_at_sale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    line_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recipe_itemsUpdateWithoutMenu_itemsInput = {
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_items?: stock_itemsUpdateOneRequiredWithoutRecipe_itemsNestedInput
  }

  export type recipe_itemsUncheckedUpdateWithoutMenu_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    stock_item_id?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type recipe_itemsUncheckedUpdateManyWithoutMenu_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    stock_item_id?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_linesCreateManyOrdersInput = {
    id?: number
    menu_item_id: number
    quantity: number
    price_at_sale: Decimal | DecimalJsLike | number | string
    line_total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type paymentsCreateManyOrdersInput = {
    id?: number
    method: $Enums.payment_method
    amount: Decimal | DecimalJsLike | number | string
    reference?: string | null
    paid_at?: Date | string | null
    created_by?: number | null
  }

  export type stock_movementsCreateManyOrdersInput = {
    id?: number
    stock_item_id: number
    movement_type: $Enums.stock_movement_type
    quantity: Decimal | DecimalJsLike | number | string
    notes?: string | null
    created_at?: Date | string | null
    created_by?: number | null
  }

  export type order_linesUpdateWithoutOrdersInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price_at_sale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    line_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    menu_items?: menu_itemsUpdateOneRequiredWithoutOrder_linesNestedInput
  }

  export type order_linesUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price_at_sale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    line_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_linesUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price_at_sale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    line_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsUpdateWithoutOrdersInput = {
    method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutPaymentsNestedInput
  }

  export type paymentsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type paymentsUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type stock_movementsUpdateWithoutOrdersInput = {
    movement_type?: Enumstock_movement_typeFieldUpdateOperationsInput | $Enums.stock_movement_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutStock_movementsNestedInput
    stock_items?: stock_itemsUpdateOneRequiredWithoutStock_movementsNestedInput
  }

  export type stock_movementsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    stock_item_id?: IntFieldUpdateOperationsInput | number
    movement_type?: Enumstock_movement_typeFieldUpdateOperationsInput | $Enums.stock_movement_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type stock_movementsUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    stock_item_id?: IntFieldUpdateOperationsInput | number
    movement_type?: Enumstock_movement_typeFieldUpdateOperationsInput | $Enums.stock_movement_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type recipe_itemsCreateManyStock_itemsInput = {
    id?: number
    menu_item_id: number
    quantity: Decimal | DecimalJsLike | number | string
  }

  export type stock_movementsCreateManyStock_itemsInput = {
    id?: number
    movement_type: $Enums.stock_movement_type
    quantity: Decimal | DecimalJsLike | number | string
    related_order_id?: number | null
    notes?: string | null
    created_at?: Date | string | null
    created_by?: number | null
  }

  export type recipe_itemsUpdateWithoutStock_itemsInput = {
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menu_items?: menu_itemsUpdateOneRequiredWithoutRecipe_itemsNestedInput
  }

  export type recipe_itemsUncheckedUpdateWithoutStock_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_item_id?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type recipe_itemsUncheckedUpdateManyWithoutStock_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_item_id?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type stock_movementsUpdateWithoutStock_itemsInput = {
    movement_type?: Enumstock_movement_typeFieldUpdateOperationsInput | $Enums.stock_movement_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutStock_movementsNestedInput
    orders?: ordersUpdateOneWithoutStock_movementsNestedInput
  }

  export type stock_movementsUncheckedUpdateWithoutStock_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    movement_type?: Enumstock_movement_typeFieldUpdateOperationsInput | $Enums.stock_movement_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    related_order_id?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type stock_movementsUncheckedUpdateManyWithoutStock_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    movement_type?: Enumstock_movement_typeFieldUpdateOperationsInput | $Enums.stock_movement_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    related_order_id?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type expensesCreateManyUsersInput = {
    id?: number
    category: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    receipt_reference?: string | null
    incurred_at?: Date | string | null
  }

  export type ordersCreateManyUsersInput = {
    id?: number
    client_id?: number | null
    table_number?: string | null
    order_type?: string | null
    status?: $Enums.order_status | null
    total?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    created_at?: Date | string | null
  }

  export type paymentsCreateManyUsersInput = {
    id?: number
    order_id: number
    method: $Enums.payment_method
    amount: Decimal | DecimalJsLike | number | string
    reference?: string | null
    paid_at?: Date | string | null
  }

  export type stock_movementsCreateManyUsersInput = {
    id?: number
    stock_item_id: number
    movement_type: $Enums.stock_movement_type
    quantity: Decimal | DecimalJsLike | number | string
    related_order_id?: number | null
    notes?: string | null
    created_at?: Date | string | null
  }

  export type expensesUpdateWithoutUsersInput = {
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    receipt_reference?: NullableStringFieldUpdateOperationsInput | string | null
    incurred_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type expensesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    receipt_reference?: NullableStringFieldUpdateOperationsInput | string | null
    incurred_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type expensesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    receipt_reference?: NullableStringFieldUpdateOperationsInput | string | null
    incurred_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUpdateWithoutUsersInput = {
    table_number?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorder_statusFieldUpdateOperationsInput | $Enums.order_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_lines?: order_linesUpdateManyWithoutOrdersNestedInput
    clients?: clientsUpdateOneWithoutOrdersNestedInput
    payments?: paymentsUpdateManyWithoutOrdersNestedInput
    stock_movements?: stock_movementsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_number?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorder_statusFieldUpdateOperationsInput | $Enums.order_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_lines?: order_linesUncheckedUpdateManyWithoutOrdersNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutOrdersNestedInput
    stock_movements?: stock_movementsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_number?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorder_statusFieldUpdateOperationsInput | $Enums.order_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsUpdateWithoutUsersInput = {
    method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type paymentsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stock_movementsUpdateWithoutUsersInput = {
    movement_type?: Enumstock_movement_typeFieldUpdateOperationsInput | $Enums.stock_movement_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateOneWithoutStock_movementsNestedInput
    stock_items?: stock_itemsUpdateOneRequiredWithoutStock_movementsNestedInput
  }

  export type stock_movementsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    stock_item_id?: IntFieldUpdateOperationsInput | number
    movement_type?: Enumstock_movement_typeFieldUpdateOperationsInput | $Enums.stock_movement_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    related_order_id?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stock_movementsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    stock_item_id?: IntFieldUpdateOperationsInput | number
    movement_type?: Enumstock_movement_typeFieldUpdateOperationsInput | $Enums.stock_movement_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    related_order_id?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}