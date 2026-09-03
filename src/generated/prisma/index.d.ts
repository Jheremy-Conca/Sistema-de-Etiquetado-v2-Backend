
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Permiso
 * 
 */
export type Permiso = $Result.DefaultSelection<Prisma.$PermisoPayload>
/**
 * Model Fabricante
 * 
 */
export type Fabricante = $Result.DefaultSelection<Prisma.$FabricantePayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model Plantilla
 * 
 */
export type Plantilla = $Result.DefaultSelection<Prisma.$PlantillaPayload>
/**
 * Model Lote
 * 
 */
export type Lote = $Result.DefaultSelection<Prisma.$LotePayload>
/**
 * Model TrabajoImpresion
 * 
 */
export type TrabajoImpresion = $Result.DefaultSelection<Prisma.$TrabajoImpresionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Recurso: {
  LOTES: 'LOTES',
  PRODUCTOS: 'PRODUCTOS',
  FABRICANTES: 'FABRICANTES',
  PLANTILLAS: 'PLANTILLAS',
  COA: 'COA',
  USUARIOS: 'USUARIOS',
  ETIQUETAS: 'ETIQUETAS'
};

export type Recurso = (typeof Recurso)[keyof typeof Recurso]


export const EstadoTrabajoImpresion: {
  PENDIENTE: 'PENDIENTE',
  IMPRESO: 'IMPRESO',
  ERROR: 'ERROR'
};

export type EstadoTrabajoImpresion = (typeof EstadoTrabajoImpresion)[keyof typeof EstadoTrabajoImpresion]

}

export type Recurso = $Enums.Recurso

export const Recurso: typeof $Enums.Recurso

export type EstadoTrabajoImpresion = $Enums.EstadoTrabajoImpresion

export const EstadoTrabajoImpresion: typeof $Enums.EstadoTrabajoImpresion

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permiso`: Exposes CRUD operations for the **Permiso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permisos
    * const permisos = await prisma.permiso.findMany()
    * ```
    */
  get permiso(): Prisma.PermisoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fabricante`: Exposes CRUD operations for the **Fabricante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fabricantes
    * const fabricantes = await prisma.fabricante.findMany()
    * ```
    */
  get fabricante(): Prisma.FabricanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plantilla`: Exposes CRUD operations for the **Plantilla** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plantillas
    * const plantillas = await prisma.plantilla.findMany()
    * ```
    */
  get plantilla(): Prisma.PlantillaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lote`: Exposes CRUD operations for the **Lote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lotes
    * const lotes = await prisma.lote.findMany()
    * ```
    */
  get lote(): Prisma.LoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trabajoImpresion`: Exposes CRUD operations for the **TrabajoImpresion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrabajoImpresions
    * const trabajoImpresions = await prisma.trabajoImpresion.findMany()
    * ```
    */
  get trabajoImpresion(): Prisma.TrabajoImpresionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Usuario: 'Usuario',
    Permiso: 'Permiso',
    Fabricante: 'Fabricante',
    Producto: 'Producto',
    Plantilla: 'Plantilla',
    Lote: 'Lote',
    TrabajoImpresion: 'TrabajoImpresion'
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
      modelProps: "usuario" | "permiso" | "fabricante" | "producto" | "plantilla" | "lote" | "trabajoImpresion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Permiso: {
        payload: Prisma.$PermisoPayload<ExtArgs>
        fields: Prisma.PermisoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermisoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermisoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          findFirst: {
            args: Prisma.PermisoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermisoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          findMany: {
            args: Prisma.PermisoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          create: {
            args: Prisma.PermisoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          createMany: {
            args: Prisma.PermisoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermisoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          delete: {
            args: Prisma.PermisoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          update: {
            args: Prisma.PermisoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          deleteMany: {
            args: Prisma.PermisoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermisoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermisoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          upsert: {
            args: Prisma.PermisoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          aggregate: {
            args: Prisma.PermisoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermiso>
          }
          groupBy: {
            args: Prisma.PermisoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermisoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermisoCountArgs<ExtArgs>
            result: $Utils.Optional<PermisoCountAggregateOutputType> | number
          }
        }
      }
      Fabricante: {
        payload: Prisma.$FabricantePayload<ExtArgs>
        fields: Prisma.FabricanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FabricanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FabricanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload>
          }
          findFirst: {
            args: Prisma.FabricanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FabricanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload>
          }
          findMany: {
            args: Prisma.FabricanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload>[]
          }
          create: {
            args: Prisma.FabricanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload>
          }
          createMany: {
            args: Prisma.FabricanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FabricanteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload>[]
          }
          delete: {
            args: Prisma.FabricanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload>
          }
          update: {
            args: Prisma.FabricanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload>
          }
          deleteMany: {
            args: Prisma.FabricanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FabricanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FabricanteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload>[]
          }
          upsert: {
            args: Prisma.FabricanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload>
          }
          aggregate: {
            args: Prisma.FabricanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFabricante>
          }
          groupBy: {
            args: Prisma.FabricanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FabricanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FabricanteCountArgs<ExtArgs>
            result: $Utils.Optional<FabricanteCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      Plantilla: {
        payload: Prisma.$PlantillaPayload<ExtArgs>
        fields: Prisma.PlantillaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlantillaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlantillaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload>
          }
          findFirst: {
            args: Prisma.PlantillaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlantillaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload>
          }
          findMany: {
            args: Prisma.PlantillaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload>[]
          }
          create: {
            args: Prisma.PlantillaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload>
          }
          createMany: {
            args: Prisma.PlantillaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlantillaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload>[]
          }
          delete: {
            args: Prisma.PlantillaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload>
          }
          update: {
            args: Prisma.PlantillaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload>
          }
          deleteMany: {
            args: Prisma.PlantillaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlantillaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlantillaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload>[]
          }
          upsert: {
            args: Prisma.PlantillaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload>
          }
          aggregate: {
            args: Prisma.PlantillaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlantilla>
          }
          groupBy: {
            args: Prisma.PlantillaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlantillaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlantillaCountArgs<ExtArgs>
            result: $Utils.Optional<PlantillaCountAggregateOutputType> | number
          }
        }
      }
      Lote: {
        payload: Prisma.$LotePayload<ExtArgs>
        fields: Prisma.LoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          findFirst: {
            args: Prisma.LoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          findMany: {
            args: Prisma.LoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>[]
          }
          create: {
            args: Prisma.LoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          createMany: {
            args: Prisma.LoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>[]
          }
          delete: {
            args: Prisma.LoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          update: {
            args: Prisma.LoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          deleteMany: {
            args: Prisma.LoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>[]
          }
          upsert: {
            args: Prisma.LoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotePayload>
          }
          aggregate: {
            args: Prisma.LoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLote>
          }
          groupBy: {
            args: Prisma.LoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoteCountArgs<ExtArgs>
            result: $Utils.Optional<LoteCountAggregateOutputType> | number
          }
        }
      }
      TrabajoImpresion: {
        payload: Prisma.$TrabajoImpresionPayload<ExtArgs>
        fields: Prisma.TrabajoImpresionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrabajoImpresionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajoImpresionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrabajoImpresionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajoImpresionPayload>
          }
          findFirst: {
            args: Prisma.TrabajoImpresionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajoImpresionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrabajoImpresionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajoImpresionPayload>
          }
          findMany: {
            args: Prisma.TrabajoImpresionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajoImpresionPayload>[]
          }
          create: {
            args: Prisma.TrabajoImpresionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajoImpresionPayload>
          }
          createMany: {
            args: Prisma.TrabajoImpresionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrabajoImpresionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajoImpresionPayload>[]
          }
          delete: {
            args: Prisma.TrabajoImpresionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajoImpresionPayload>
          }
          update: {
            args: Prisma.TrabajoImpresionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajoImpresionPayload>
          }
          deleteMany: {
            args: Prisma.TrabajoImpresionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrabajoImpresionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrabajoImpresionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajoImpresionPayload>[]
          }
          upsert: {
            args: Prisma.TrabajoImpresionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabajoImpresionPayload>
          }
          aggregate: {
            args: Prisma.TrabajoImpresionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrabajoImpresion>
          }
          groupBy: {
            args: Prisma.TrabajoImpresionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrabajoImpresionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrabajoImpresionCountArgs<ExtArgs>
            result: $Utils.Optional<TrabajoImpresionCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    permiso?: PermisoOmit
    fabricante?: FabricanteOmit
    producto?: ProductoOmit
    plantilla?: PlantillaOmit
    lote?: LoteOmit
    trabajoImpresion?: TrabajoImpresionOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    permisos: number
    trabajosImpresion: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permisos?: boolean | UsuarioCountOutputTypeCountPermisosArgs
    trabajosImpresion?: boolean | UsuarioCountOutputTypeCountTrabajosImpresionArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPermisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermisoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTrabajosImpresionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrabajoImpresionWhereInput
  }


  /**
   * Count Type FabricanteCountOutputType
   */

  export type FabricanteCountOutputType = {
    lotes: number
  }

  export type FabricanteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lotes?: boolean | FabricanteCountOutputTypeCountLotesArgs
  }

  // Custom InputTypes
  /**
   * FabricanteCountOutputType without action
   */
  export type FabricanteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricanteCountOutputType
     */
    select?: FabricanteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FabricanteCountOutputType without action
   */
  export type FabricanteCountOutputTypeCountLotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoteWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    lotes: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lotes?: boolean | ProductoCountOutputTypeCountLotesArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountLotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoteWhereInput
  }


  /**
   * Count Type PlantillaCountOutputType
   */

  export type PlantillaCountOutputType = {
    trabajosImpresion: number
  }

  export type PlantillaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trabajosImpresion?: boolean | PlantillaCountOutputTypeCountTrabajosImpresionArgs
  }

  // Custom InputTypes
  /**
   * PlantillaCountOutputType without action
   */
  export type PlantillaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantillaCountOutputType
     */
    select?: PlantillaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlantillaCountOutputType without action
   */
  export type PlantillaCountOutputTypeCountTrabajosImpresionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrabajoImpresionWhereInput
  }


  /**
   * Count Type LoteCountOutputType
   */

  export type LoteCountOutputType = {
    trabajosImpresion: number
  }

  export type LoteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trabajosImpresion?: boolean | LoteCountOutputTypeCountTrabajosImpresionArgs
  }

  // Custom InputTypes
  /**
   * LoteCountOutputType without action
   */
  export type LoteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoteCountOutputType
     */
    select?: LoteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoteCountOutputType without action
   */
  export type LoteCountOutputTypeCountTrabajosImpresionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrabajoImpresionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    supabaseUserId: string | null
    nombre: string | null
    esAdmin: boolean | null
    avatarUrl: string | null
    createdAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    supabaseUserId: string | null
    nombre: string | null
    esAdmin: boolean | null
    avatarUrl: string | null
    createdAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    supabaseUserId: number
    nombre: number
    esAdmin: number
    avatarUrl: number
    createdAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    supabaseUserId?: true
    nombre?: true
    esAdmin?: true
    avatarUrl?: true
    createdAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    supabaseUserId?: true
    nombre?: true
    esAdmin?: true
    avatarUrl?: true
    createdAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    supabaseUserId?: true
    nombre?: true
    esAdmin?: true
    avatarUrl?: true
    createdAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    supabaseUserId: string
    nombre: string
    esAdmin: boolean
    avatarUrl: string | null
    createdAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseUserId?: boolean
    nombre?: boolean
    esAdmin?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    permisos?: boolean | Usuario$permisosArgs<ExtArgs>
    trabajosImpresion?: boolean | Usuario$trabajosImpresionArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseUserId?: boolean
    nombre?: boolean
    esAdmin?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseUserId?: boolean
    nombre?: boolean
    esAdmin?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    supabaseUserId?: boolean
    nombre?: boolean
    esAdmin?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supabaseUserId" | "nombre" | "esAdmin" | "avatarUrl" | "createdAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permisos?: boolean | Usuario$permisosArgs<ExtArgs>
    trabajosImpresion?: boolean | Usuario$trabajosImpresionArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      permisos: Prisma.$PermisoPayload<ExtArgs>[]
      trabajosImpresion: Prisma.$TrabajoImpresionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      supabaseUserId: string
      nombre: string
      esAdmin: boolean
      avatarUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permisos<T extends Usuario$permisosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$permisosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trabajosImpresion<T extends Usuario$trabajosImpresionArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$trabajosImpresionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrabajoImpresionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly supabaseUserId: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly esAdmin: FieldRef<"Usuario", 'Boolean'>
    readonly avatarUrl: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.permisos
   */
  export type Usuario$permisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    where?: PermisoWhereInput
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    cursor?: PermisoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Usuario.trabajosImpresion
   */
  export type Usuario$trabajosImpresionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabajoImpresion
     */
    select?: TrabajoImpresionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabajoImpresion
     */
    omit?: TrabajoImpresionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajoImpresionInclude<ExtArgs> | null
    where?: TrabajoImpresionWhereInput
    orderBy?: TrabajoImpresionOrderByWithRelationInput | TrabajoImpresionOrderByWithRelationInput[]
    cursor?: TrabajoImpresionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrabajoImpresionScalarFieldEnum | TrabajoImpresionScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Permiso
   */

  export type AggregatePermiso = {
    _count: PermisoCountAggregateOutputType | null
    _avg: PermisoAvgAggregateOutputType | null
    _sum: PermisoSumAggregateOutputType | null
    _min: PermisoMinAggregateOutputType | null
    _max: PermisoMaxAggregateOutputType | null
  }

  export type PermisoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type PermisoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type PermisoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    recurso: $Enums.Recurso | null
    puedeVer: boolean | null
    puedeCrear: boolean | null
    puedeEditar: boolean | null
    puedeEliminar: boolean | null
  }

  export type PermisoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    recurso: $Enums.Recurso | null
    puedeVer: boolean | null
    puedeCrear: boolean | null
    puedeEditar: boolean | null
    puedeEliminar: boolean | null
  }

  export type PermisoCountAggregateOutputType = {
    id: number
    usuarioId: number
    recurso: number
    puedeVer: number
    puedeCrear: number
    puedeEditar: number
    puedeEliminar: number
    _all: number
  }


  export type PermisoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type PermisoSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type PermisoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    recurso?: true
    puedeVer?: true
    puedeCrear?: true
    puedeEditar?: true
    puedeEliminar?: true
  }

  export type PermisoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    recurso?: true
    puedeVer?: true
    puedeCrear?: true
    puedeEditar?: true
    puedeEliminar?: true
  }

  export type PermisoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    recurso?: true
    puedeVer?: true
    puedeCrear?: true
    puedeEditar?: true
    puedeEliminar?: true
    _all?: true
  }

  export type PermisoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permiso to aggregate.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permisos
    **/
    _count?: true | PermisoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermisoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermisoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermisoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermisoMaxAggregateInputType
  }

  export type GetPermisoAggregateType<T extends PermisoAggregateArgs> = {
        [P in keyof T & keyof AggregatePermiso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermiso[P]>
      : GetScalarType<T[P], AggregatePermiso[P]>
  }




  export type PermisoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermisoWhereInput
    orderBy?: PermisoOrderByWithAggregationInput | PermisoOrderByWithAggregationInput[]
    by: PermisoScalarFieldEnum[] | PermisoScalarFieldEnum
    having?: PermisoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermisoCountAggregateInputType | true
    _avg?: PermisoAvgAggregateInputType
    _sum?: PermisoSumAggregateInputType
    _min?: PermisoMinAggregateInputType
    _max?: PermisoMaxAggregateInputType
  }

  export type PermisoGroupByOutputType = {
    id: number
    usuarioId: number
    recurso: $Enums.Recurso
    puedeVer: boolean
    puedeCrear: boolean
    puedeEditar: boolean
    puedeEliminar: boolean
    _count: PermisoCountAggregateOutputType | null
    _avg: PermisoAvgAggregateOutputType | null
    _sum: PermisoSumAggregateOutputType | null
    _min: PermisoMinAggregateOutputType | null
    _max: PermisoMaxAggregateOutputType | null
  }

  type GetPermisoGroupByPayload<T extends PermisoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermisoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermisoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermisoGroupByOutputType[P]>
            : GetScalarType<T[P], PermisoGroupByOutputType[P]>
        }
      >
    >


  export type PermisoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    recurso?: boolean
    puedeVer?: boolean
    puedeCrear?: boolean
    puedeEditar?: boolean
    puedeEliminar?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permiso"]>

  export type PermisoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    recurso?: boolean
    puedeVer?: boolean
    puedeCrear?: boolean
    puedeEditar?: boolean
    puedeEliminar?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permiso"]>

  export type PermisoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    recurso?: boolean
    puedeVer?: boolean
    puedeCrear?: boolean
    puedeEditar?: boolean
    puedeEliminar?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permiso"]>

  export type PermisoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    recurso?: boolean
    puedeVer?: boolean
    puedeCrear?: boolean
    puedeEditar?: boolean
    puedeEliminar?: boolean
  }

  export type PermisoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "recurso" | "puedeVer" | "puedeCrear" | "puedeEditar" | "puedeEliminar", ExtArgs["result"]["permiso"]>
  export type PermisoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PermisoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PermisoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $PermisoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permiso"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      recurso: $Enums.Recurso
      puedeVer: boolean
      puedeCrear: boolean
      puedeEditar: boolean
      puedeEliminar: boolean
    }, ExtArgs["result"]["permiso"]>
    composites: {}
  }

  type PermisoGetPayload<S extends boolean | null | undefined | PermisoDefaultArgs> = $Result.GetResult<Prisma.$PermisoPayload, S>

  type PermisoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermisoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermisoCountAggregateInputType | true
    }

  export interface PermisoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permiso'], meta: { name: 'Permiso' } }
    /**
     * Find zero or one Permiso that matches the filter.
     * @param {PermisoFindUniqueArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermisoFindUniqueArgs>(args: SelectSubset<T, PermisoFindUniqueArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permiso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermisoFindUniqueOrThrowArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermisoFindUniqueOrThrowArgs>(args: SelectSubset<T, PermisoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permiso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindFirstArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermisoFindFirstArgs>(args?: SelectSubset<T, PermisoFindFirstArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permiso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindFirstOrThrowArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermisoFindFirstOrThrowArgs>(args?: SelectSubset<T, PermisoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permisos
     * const permisos = await prisma.permiso.findMany()
     * 
     * // Get first 10 Permisos
     * const permisos = await prisma.permiso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permisoWithIdOnly = await prisma.permiso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermisoFindManyArgs>(args?: SelectSubset<T, PermisoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permiso.
     * @param {PermisoCreateArgs} args - Arguments to create a Permiso.
     * @example
     * // Create one Permiso
     * const Permiso = await prisma.permiso.create({
     *   data: {
     *     // ... data to create a Permiso
     *   }
     * })
     * 
     */
    create<T extends PermisoCreateArgs>(args: SelectSubset<T, PermisoCreateArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permisos.
     * @param {PermisoCreateManyArgs} args - Arguments to create many Permisos.
     * @example
     * // Create many Permisos
     * const permiso = await prisma.permiso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermisoCreateManyArgs>(args?: SelectSubset<T, PermisoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permisos and returns the data saved in the database.
     * @param {PermisoCreateManyAndReturnArgs} args - Arguments to create many Permisos.
     * @example
     * // Create many Permisos
     * const permiso = await prisma.permiso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permisos and only return the `id`
     * const permisoWithIdOnly = await prisma.permiso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermisoCreateManyAndReturnArgs>(args?: SelectSubset<T, PermisoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permiso.
     * @param {PermisoDeleteArgs} args - Arguments to delete one Permiso.
     * @example
     * // Delete one Permiso
     * const Permiso = await prisma.permiso.delete({
     *   where: {
     *     // ... filter to delete one Permiso
     *   }
     * })
     * 
     */
    delete<T extends PermisoDeleteArgs>(args: SelectSubset<T, PermisoDeleteArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permiso.
     * @param {PermisoUpdateArgs} args - Arguments to update one Permiso.
     * @example
     * // Update one Permiso
     * const permiso = await prisma.permiso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermisoUpdateArgs>(args: SelectSubset<T, PermisoUpdateArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permisos.
     * @param {PermisoDeleteManyArgs} args - Arguments to filter Permisos to delete.
     * @example
     * // Delete a few Permisos
     * const { count } = await prisma.permiso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermisoDeleteManyArgs>(args?: SelectSubset<T, PermisoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permisos
     * const permiso = await prisma.permiso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermisoUpdateManyArgs>(args: SelectSubset<T, PermisoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permisos and returns the data updated in the database.
     * @param {PermisoUpdateManyAndReturnArgs} args - Arguments to update many Permisos.
     * @example
     * // Update many Permisos
     * const permiso = await prisma.permiso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permisos and only return the `id`
     * const permisoWithIdOnly = await prisma.permiso.updateManyAndReturn({
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
    updateManyAndReturn<T extends PermisoUpdateManyAndReturnArgs>(args: SelectSubset<T, PermisoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permiso.
     * @param {PermisoUpsertArgs} args - Arguments to update or create a Permiso.
     * @example
     * // Update or create a Permiso
     * const permiso = await prisma.permiso.upsert({
     *   create: {
     *     // ... data to create a Permiso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permiso we want to update
     *   }
     * })
     */
    upsert<T extends PermisoUpsertArgs>(args: SelectSubset<T, PermisoUpsertArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoCountArgs} args - Arguments to filter Permisos to count.
     * @example
     * // Count the number of Permisos
     * const count = await prisma.permiso.count({
     *   where: {
     *     // ... the filter for the Permisos we want to count
     *   }
     * })
    **/
    count<T extends PermisoCountArgs>(
      args?: Subset<T, PermisoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermisoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermisoAggregateArgs>(args: Subset<T, PermisoAggregateArgs>): Prisma.PrismaPromise<GetPermisoAggregateType<T>>

    /**
     * Group by Permiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoGroupByArgs} args - Group by arguments.
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
      T extends PermisoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermisoGroupByArgs['orderBy'] }
        : { orderBy?: PermisoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermisoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermisoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permiso model
   */
  readonly fields: PermisoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permiso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermisoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Permiso model
   */
  interface PermisoFieldRefs {
    readonly id: FieldRef<"Permiso", 'Int'>
    readonly usuarioId: FieldRef<"Permiso", 'Int'>
    readonly recurso: FieldRef<"Permiso", 'Recurso'>
    readonly puedeVer: FieldRef<"Permiso", 'Boolean'>
    readonly puedeCrear: FieldRef<"Permiso", 'Boolean'>
    readonly puedeEditar: FieldRef<"Permiso", 'Boolean'>
    readonly puedeEliminar: FieldRef<"Permiso", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Permiso findUnique
   */
  export type PermisoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso findUniqueOrThrow
   */
  export type PermisoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso findFirst
   */
  export type PermisoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permisos.
     */
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso findFirstOrThrow
   */
  export type PermisoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permisos.
     */
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso findMany
   */
  export type PermisoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permisos to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permisos.
     */
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso create
   */
  export type PermisoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The data needed to create a Permiso.
     */
    data: XOR<PermisoCreateInput, PermisoUncheckedCreateInput>
  }

  /**
   * Permiso createMany
   */
  export type PermisoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permisos.
     */
    data: PermisoCreateManyInput | PermisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permiso createManyAndReturn
   */
  export type PermisoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * The data used to create many Permisos.
     */
    data: PermisoCreateManyInput | PermisoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Permiso update
   */
  export type PermisoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The data needed to update a Permiso.
     */
    data: XOR<PermisoUpdateInput, PermisoUncheckedUpdateInput>
    /**
     * Choose, which Permiso to update.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso updateMany
   */
  export type PermisoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permisos.
     */
    data: XOR<PermisoUpdateManyMutationInput, PermisoUncheckedUpdateManyInput>
    /**
     * Filter which Permisos to update
     */
    where?: PermisoWhereInput
    /**
     * Limit how many Permisos to update.
     */
    limit?: number
  }

  /**
   * Permiso updateManyAndReturn
   */
  export type PermisoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * The data used to update Permisos.
     */
    data: XOR<PermisoUpdateManyMutationInput, PermisoUncheckedUpdateManyInput>
    /**
     * Filter which Permisos to update
     */
    where?: PermisoWhereInput
    /**
     * Limit how many Permisos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Permiso upsert
   */
  export type PermisoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The filter to search for the Permiso to update in case it exists.
     */
    where: PermisoWhereUniqueInput
    /**
     * In case the Permiso found by the `where` argument doesn't exist, create a new Permiso with this data.
     */
    create: XOR<PermisoCreateInput, PermisoUncheckedCreateInput>
    /**
     * In case the Permiso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermisoUpdateInput, PermisoUncheckedUpdateInput>
  }

  /**
   * Permiso delete
   */
  export type PermisoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter which Permiso to delete.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso deleteMany
   */
  export type PermisoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permisos to delete
     */
    where?: PermisoWhereInput
    /**
     * Limit how many Permisos to delete.
     */
    limit?: number
  }

  /**
   * Permiso without action
   */
  export type PermisoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
  }


  /**
   * Model Fabricante
   */

  export type AggregateFabricante = {
    _count: FabricanteCountAggregateOutputType | null
    _avg: FabricanteAvgAggregateOutputType | null
    _sum: FabricanteSumAggregateOutputType | null
    _min: FabricanteMinAggregateOutputType | null
    _max: FabricanteMaxAggregateOutputType | null
  }

  export type FabricanteAvgAggregateOutputType = {
    id: number | null
  }

  export type FabricanteSumAggregateOutputType = {
    id: number | null
  }

  export type FabricanteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    nombreNormalizado: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FabricanteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    nombreNormalizado: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FabricanteCountAggregateOutputType = {
    id: number
    nombre: number
    nombreNormalizado: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FabricanteAvgAggregateInputType = {
    id?: true
  }

  export type FabricanteSumAggregateInputType = {
    id?: true
  }

  export type FabricanteMinAggregateInputType = {
    id?: true
    nombre?: true
    nombreNormalizado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FabricanteMaxAggregateInputType = {
    id?: true
    nombre?: true
    nombreNormalizado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FabricanteCountAggregateInputType = {
    id?: true
    nombre?: true
    nombreNormalizado?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FabricanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fabricante to aggregate.
     */
    where?: FabricanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fabricantes to fetch.
     */
    orderBy?: FabricanteOrderByWithRelationInput | FabricanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FabricanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fabricantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fabricantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fabricantes
    **/
    _count?: true | FabricanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FabricanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FabricanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FabricanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FabricanteMaxAggregateInputType
  }

  export type GetFabricanteAggregateType<T extends FabricanteAggregateArgs> = {
        [P in keyof T & keyof AggregateFabricante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFabricante[P]>
      : GetScalarType<T[P], AggregateFabricante[P]>
  }




  export type FabricanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FabricanteWhereInput
    orderBy?: FabricanteOrderByWithAggregationInput | FabricanteOrderByWithAggregationInput[]
    by: FabricanteScalarFieldEnum[] | FabricanteScalarFieldEnum
    having?: FabricanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FabricanteCountAggregateInputType | true
    _avg?: FabricanteAvgAggregateInputType
    _sum?: FabricanteSumAggregateInputType
    _min?: FabricanteMinAggregateInputType
    _max?: FabricanteMaxAggregateInputType
  }

  export type FabricanteGroupByOutputType = {
    id: number
    nombre: string
    nombreNormalizado: string
    createdAt: Date
    updatedAt: Date
    _count: FabricanteCountAggregateOutputType | null
    _avg: FabricanteAvgAggregateOutputType | null
    _sum: FabricanteSumAggregateOutputType | null
    _min: FabricanteMinAggregateOutputType | null
    _max: FabricanteMaxAggregateOutputType | null
  }

  type GetFabricanteGroupByPayload<T extends FabricanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FabricanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FabricanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FabricanteGroupByOutputType[P]>
            : GetScalarType<T[P], FabricanteGroupByOutputType[P]>
        }
      >
    >


  export type FabricanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    nombreNormalizado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lotes?: boolean | Fabricante$lotesArgs<ExtArgs>
    _count?: boolean | FabricanteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fabricante"]>

  export type FabricanteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    nombreNormalizado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fabricante"]>

  export type FabricanteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    nombreNormalizado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fabricante"]>

  export type FabricanteSelectScalar = {
    id?: boolean
    nombre?: boolean
    nombreNormalizado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FabricanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "nombreNormalizado" | "createdAt" | "updatedAt", ExtArgs["result"]["fabricante"]>
  export type FabricanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lotes?: boolean | Fabricante$lotesArgs<ExtArgs>
    _count?: boolean | FabricanteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FabricanteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FabricanteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FabricantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fabricante"
    objects: {
      lotes: Prisma.$LotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      nombreNormalizado: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fabricante"]>
    composites: {}
  }

  type FabricanteGetPayload<S extends boolean | null | undefined | FabricanteDefaultArgs> = $Result.GetResult<Prisma.$FabricantePayload, S>

  type FabricanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FabricanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FabricanteCountAggregateInputType | true
    }

  export interface FabricanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fabricante'], meta: { name: 'Fabricante' } }
    /**
     * Find zero or one Fabricante that matches the filter.
     * @param {FabricanteFindUniqueArgs} args - Arguments to find a Fabricante
     * @example
     * // Get one Fabricante
     * const fabricante = await prisma.fabricante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FabricanteFindUniqueArgs>(args: SelectSubset<T, FabricanteFindUniqueArgs<ExtArgs>>): Prisma__FabricanteClient<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fabricante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FabricanteFindUniqueOrThrowArgs} args - Arguments to find a Fabricante
     * @example
     * // Get one Fabricante
     * const fabricante = await prisma.fabricante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FabricanteFindUniqueOrThrowArgs>(args: SelectSubset<T, FabricanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FabricanteClient<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fabricante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricanteFindFirstArgs} args - Arguments to find a Fabricante
     * @example
     * // Get one Fabricante
     * const fabricante = await prisma.fabricante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FabricanteFindFirstArgs>(args?: SelectSubset<T, FabricanteFindFirstArgs<ExtArgs>>): Prisma__FabricanteClient<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fabricante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricanteFindFirstOrThrowArgs} args - Arguments to find a Fabricante
     * @example
     * // Get one Fabricante
     * const fabricante = await prisma.fabricante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FabricanteFindFirstOrThrowArgs>(args?: SelectSubset<T, FabricanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FabricanteClient<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fabricantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fabricantes
     * const fabricantes = await prisma.fabricante.findMany()
     * 
     * // Get first 10 Fabricantes
     * const fabricantes = await prisma.fabricante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fabricanteWithIdOnly = await prisma.fabricante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FabricanteFindManyArgs>(args?: SelectSubset<T, FabricanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fabricante.
     * @param {FabricanteCreateArgs} args - Arguments to create a Fabricante.
     * @example
     * // Create one Fabricante
     * const Fabricante = await prisma.fabricante.create({
     *   data: {
     *     // ... data to create a Fabricante
     *   }
     * })
     * 
     */
    create<T extends FabricanteCreateArgs>(args: SelectSubset<T, FabricanteCreateArgs<ExtArgs>>): Prisma__FabricanteClient<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fabricantes.
     * @param {FabricanteCreateManyArgs} args - Arguments to create many Fabricantes.
     * @example
     * // Create many Fabricantes
     * const fabricante = await prisma.fabricante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FabricanteCreateManyArgs>(args?: SelectSubset<T, FabricanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fabricantes and returns the data saved in the database.
     * @param {FabricanteCreateManyAndReturnArgs} args - Arguments to create many Fabricantes.
     * @example
     * // Create many Fabricantes
     * const fabricante = await prisma.fabricante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fabricantes and only return the `id`
     * const fabricanteWithIdOnly = await prisma.fabricante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FabricanteCreateManyAndReturnArgs>(args?: SelectSubset<T, FabricanteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fabricante.
     * @param {FabricanteDeleteArgs} args - Arguments to delete one Fabricante.
     * @example
     * // Delete one Fabricante
     * const Fabricante = await prisma.fabricante.delete({
     *   where: {
     *     // ... filter to delete one Fabricante
     *   }
     * })
     * 
     */
    delete<T extends FabricanteDeleteArgs>(args: SelectSubset<T, FabricanteDeleteArgs<ExtArgs>>): Prisma__FabricanteClient<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fabricante.
     * @param {FabricanteUpdateArgs} args - Arguments to update one Fabricante.
     * @example
     * // Update one Fabricante
     * const fabricante = await prisma.fabricante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FabricanteUpdateArgs>(args: SelectSubset<T, FabricanteUpdateArgs<ExtArgs>>): Prisma__FabricanteClient<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fabricantes.
     * @param {FabricanteDeleteManyArgs} args - Arguments to filter Fabricantes to delete.
     * @example
     * // Delete a few Fabricantes
     * const { count } = await prisma.fabricante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FabricanteDeleteManyArgs>(args?: SelectSubset<T, FabricanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fabricantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fabricantes
     * const fabricante = await prisma.fabricante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FabricanteUpdateManyArgs>(args: SelectSubset<T, FabricanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fabricantes and returns the data updated in the database.
     * @param {FabricanteUpdateManyAndReturnArgs} args - Arguments to update many Fabricantes.
     * @example
     * // Update many Fabricantes
     * const fabricante = await prisma.fabricante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fabricantes and only return the `id`
     * const fabricanteWithIdOnly = await prisma.fabricante.updateManyAndReturn({
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
    updateManyAndReturn<T extends FabricanteUpdateManyAndReturnArgs>(args: SelectSubset<T, FabricanteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fabricante.
     * @param {FabricanteUpsertArgs} args - Arguments to update or create a Fabricante.
     * @example
     * // Update or create a Fabricante
     * const fabricante = await prisma.fabricante.upsert({
     *   create: {
     *     // ... data to create a Fabricante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fabricante we want to update
     *   }
     * })
     */
    upsert<T extends FabricanteUpsertArgs>(args: SelectSubset<T, FabricanteUpsertArgs<ExtArgs>>): Prisma__FabricanteClient<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fabricantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricanteCountArgs} args - Arguments to filter Fabricantes to count.
     * @example
     * // Count the number of Fabricantes
     * const count = await prisma.fabricante.count({
     *   where: {
     *     // ... the filter for the Fabricantes we want to count
     *   }
     * })
    **/
    count<T extends FabricanteCountArgs>(
      args?: Subset<T, FabricanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FabricanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fabricante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FabricanteAggregateArgs>(args: Subset<T, FabricanteAggregateArgs>): Prisma.PrismaPromise<GetFabricanteAggregateType<T>>

    /**
     * Group by Fabricante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricanteGroupByArgs} args - Group by arguments.
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
      T extends FabricanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FabricanteGroupByArgs['orderBy'] }
        : { orderBy?: FabricanteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FabricanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFabricanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fabricante model
   */
  readonly fields: FabricanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fabricante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FabricanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lotes<T extends Fabricante$lotesArgs<ExtArgs> = {}>(args?: Subset<T, Fabricante$lotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Fabricante model
   */
  interface FabricanteFieldRefs {
    readonly id: FieldRef<"Fabricante", 'Int'>
    readonly nombre: FieldRef<"Fabricante", 'String'>
    readonly nombreNormalizado: FieldRef<"Fabricante", 'String'>
    readonly createdAt: FieldRef<"Fabricante", 'DateTime'>
    readonly updatedAt: FieldRef<"Fabricante", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fabricante findUnique
   */
  export type FabricanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricanteInclude<ExtArgs> | null
    /**
     * Filter, which Fabricante to fetch.
     */
    where: FabricanteWhereUniqueInput
  }

  /**
   * Fabricante findUniqueOrThrow
   */
  export type FabricanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricanteInclude<ExtArgs> | null
    /**
     * Filter, which Fabricante to fetch.
     */
    where: FabricanteWhereUniqueInput
  }

  /**
   * Fabricante findFirst
   */
  export type FabricanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricanteInclude<ExtArgs> | null
    /**
     * Filter, which Fabricante to fetch.
     */
    where?: FabricanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fabricantes to fetch.
     */
    orderBy?: FabricanteOrderByWithRelationInput | FabricanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fabricantes.
     */
    cursor?: FabricanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fabricantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fabricantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fabricantes.
     */
    distinct?: FabricanteScalarFieldEnum | FabricanteScalarFieldEnum[]
  }

  /**
   * Fabricante findFirstOrThrow
   */
  export type FabricanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricanteInclude<ExtArgs> | null
    /**
     * Filter, which Fabricante to fetch.
     */
    where?: FabricanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fabricantes to fetch.
     */
    orderBy?: FabricanteOrderByWithRelationInput | FabricanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fabricantes.
     */
    cursor?: FabricanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fabricantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fabricantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fabricantes.
     */
    distinct?: FabricanteScalarFieldEnum | FabricanteScalarFieldEnum[]
  }

  /**
   * Fabricante findMany
   */
  export type FabricanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricanteInclude<ExtArgs> | null
    /**
     * Filter, which Fabricantes to fetch.
     */
    where?: FabricanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fabricantes to fetch.
     */
    orderBy?: FabricanteOrderByWithRelationInput | FabricanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fabricantes.
     */
    cursor?: FabricanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fabricantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fabricantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fabricantes.
     */
    distinct?: FabricanteScalarFieldEnum | FabricanteScalarFieldEnum[]
  }

  /**
   * Fabricante create
   */
  export type FabricanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricanteInclude<ExtArgs> | null
    /**
     * The data needed to create a Fabricante.
     */
    data: XOR<FabricanteCreateInput, FabricanteUncheckedCreateInput>
  }

  /**
   * Fabricante createMany
   */
  export type FabricanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fabricantes.
     */
    data: FabricanteCreateManyInput | FabricanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fabricante createManyAndReturn
   */
  export type FabricanteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * The data used to create many Fabricantes.
     */
    data: FabricanteCreateManyInput | FabricanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fabricante update
   */
  export type FabricanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricanteInclude<ExtArgs> | null
    /**
     * The data needed to update a Fabricante.
     */
    data: XOR<FabricanteUpdateInput, FabricanteUncheckedUpdateInput>
    /**
     * Choose, which Fabricante to update.
     */
    where: FabricanteWhereUniqueInput
  }

  /**
   * Fabricante updateMany
   */
  export type FabricanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fabricantes.
     */
    data: XOR<FabricanteUpdateManyMutationInput, FabricanteUncheckedUpdateManyInput>
    /**
     * Filter which Fabricantes to update
     */
    where?: FabricanteWhereInput
    /**
     * Limit how many Fabricantes to update.
     */
    limit?: number
  }

  /**
   * Fabricante updateManyAndReturn
   */
  export type FabricanteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * The data used to update Fabricantes.
     */
    data: XOR<FabricanteUpdateManyMutationInput, FabricanteUncheckedUpdateManyInput>
    /**
     * Filter which Fabricantes to update
     */
    where?: FabricanteWhereInput
    /**
     * Limit how many Fabricantes to update.
     */
    limit?: number
  }

  /**
   * Fabricante upsert
   */
  export type FabricanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricanteInclude<ExtArgs> | null
    /**
     * The filter to search for the Fabricante to update in case it exists.
     */
    where: FabricanteWhereUniqueInput
    /**
     * In case the Fabricante found by the `where` argument doesn't exist, create a new Fabricante with this data.
     */
    create: XOR<FabricanteCreateInput, FabricanteUncheckedCreateInput>
    /**
     * In case the Fabricante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FabricanteUpdateInput, FabricanteUncheckedUpdateInput>
  }

  /**
   * Fabricante delete
   */
  export type FabricanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricanteInclude<ExtArgs> | null
    /**
     * Filter which Fabricante to delete.
     */
    where: FabricanteWhereUniqueInput
  }

  /**
   * Fabricante deleteMany
   */
  export type FabricanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fabricantes to delete
     */
    where?: FabricanteWhereInput
    /**
     * Limit how many Fabricantes to delete.
     */
    limit?: number
  }

  /**
   * Fabricante.lotes
   */
  export type Fabricante$lotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    where?: LoteWhereInput
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    cursor?: LoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoteScalarFieldEnum | LoteScalarFieldEnum[]
  }

  /**
   * Fabricante without action
   */
  export type FabricanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricanteInclude<ExtArgs> | null
  }


  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    id: number | null
    nfpaSalud: number | null
    nfpaInflamabilidad: number | null
    nfpaReactividad: number | null
  }

  export type ProductoSumAggregateOutputType = {
    id: number | null
    nfpaSalud: number | null
    nfpaInflamabilidad: number | null
    nfpaReactividad: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    nombreNormalizado: string | null
    nfpaSalud: number | null
    nfpaInflamabilidad: number | null
    nfpaReactividad: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    nombreNormalizado: string | null
    nfpaSalud: number | null
    nfpaInflamabilidad: number | null
    nfpaReactividad: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    nombre: number
    nombreNormalizado: number
    nfpaSalud: number
    nfpaInflamabilidad: number
    nfpaReactividad: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    id?: true
    nfpaSalud?: true
    nfpaInflamabilidad?: true
    nfpaReactividad?: true
  }

  export type ProductoSumAggregateInputType = {
    id?: true
    nfpaSalud?: true
    nfpaInflamabilidad?: true
    nfpaReactividad?: true
  }

  export type ProductoMinAggregateInputType = {
    id?: true
    nombre?: true
    nombreNormalizado?: true
    nfpaSalud?: true
    nfpaInflamabilidad?: true
    nfpaReactividad?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    nombre?: true
    nombreNormalizado?: true
    nfpaSalud?: true
    nfpaInflamabilidad?: true
    nfpaReactividad?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    nombre?: true
    nombreNormalizado?: true
    nfpaSalud?: true
    nfpaInflamabilidad?: true
    nfpaReactividad?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id: number
    nombre: string
    nombreNormalizado: string
    nfpaSalud: number | null
    nfpaInflamabilidad: number | null
    nfpaReactividad: number | null
    createdAt: Date
    updatedAt: Date
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    nombreNormalizado?: boolean
    nfpaSalud?: boolean
    nfpaInflamabilidad?: boolean
    nfpaReactividad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lotes?: boolean | Producto$lotesArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    nombreNormalizado?: boolean
    nfpaSalud?: boolean
    nfpaInflamabilidad?: boolean
    nfpaReactividad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    nombreNormalizado?: boolean
    nfpaSalud?: boolean
    nfpaInflamabilidad?: boolean
    nfpaReactividad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectScalar = {
    id?: boolean
    nombre?: boolean
    nombreNormalizado?: boolean
    nfpaSalud?: boolean
    nfpaInflamabilidad?: boolean
    nfpaReactividad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "nombreNormalizado" | "nfpaSalud" | "nfpaInflamabilidad" | "nfpaReactividad" | "createdAt" | "updatedAt", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lotes?: boolean | Producto$lotesArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      lotes: Prisma.$LotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      nombreNormalizado: string
      nfpaSalud: number | null
      nfpaInflamabilidad: number | null
      nfpaReactividad: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {ProductoCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {ProductoUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
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
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lotes<T extends Producto$lotesArgs<ExtArgs> = {}>(args?: Subset<T, Producto$lotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly id: FieldRef<"Producto", 'Int'>
    readonly nombre: FieldRef<"Producto", 'String'>
    readonly nombreNormalizado: FieldRef<"Producto", 'String'>
    readonly nfpaSalud: FieldRef<"Producto", 'Int'>
    readonly nfpaInflamabilidad: FieldRef<"Producto", 'Int'>
    readonly nfpaReactividad: FieldRef<"Producto", 'Int'>
    readonly createdAt: FieldRef<"Producto", 'DateTime'>
    readonly updatedAt: FieldRef<"Producto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto createManyAndReturn
   */
  export type ProductoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto updateManyAndReturn
   */
  export type ProductoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.lotes
   */
  export type Producto$lotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    where?: LoteWhereInput
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    cursor?: LoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoteScalarFieldEnum | LoteScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model Plantilla
   */

  export type AggregatePlantilla = {
    _count: PlantillaCountAggregateOutputType | null
    _avg: PlantillaAvgAggregateOutputType | null
    _sum: PlantillaSumAggregateOutputType | null
    _min: PlantillaMinAggregateOutputType | null
    _max: PlantillaMaxAggregateOutputType | null
  }

  export type PlantillaAvgAggregateOutputType = {
    id: number | null
  }

  export type PlantillaSumAggregateOutputType = {
    id: number | null
  }

  export type PlantillaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    archivo: string | null
    activa: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlantillaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    archivo: string | null
    activa: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlantillaCountAggregateOutputType = {
    id: number
    nombre: number
    archivo: number
    activa: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlantillaAvgAggregateInputType = {
    id?: true
  }

  export type PlantillaSumAggregateInputType = {
    id?: true
  }

  export type PlantillaMinAggregateInputType = {
    id?: true
    nombre?: true
    archivo?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlantillaMaxAggregateInputType = {
    id?: true
    nombre?: true
    archivo?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlantillaCountAggregateInputType = {
    id?: true
    nombre?: true
    archivo?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlantillaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plantilla to aggregate.
     */
    where?: PlantillaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantillas to fetch.
     */
    orderBy?: PlantillaOrderByWithRelationInput | PlantillaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlantillaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantillas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantillas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plantillas
    **/
    _count?: true | PlantillaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlantillaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlantillaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlantillaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlantillaMaxAggregateInputType
  }

  export type GetPlantillaAggregateType<T extends PlantillaAggregateArgs> = {
        [P in keyof T & keyof AggregatePlantilla]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlantilla[P]>
      : GetScalarType<T[P], AggregatePlantilla[P]>
  }




  export type PlantillaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantillaWhereInput
    orderBy?: PlantillaOrderByWithAggregationInput | PlantillaOrderByWithAggregationInput[]
    by: PlantillaScalarFieldEnum[] | PlantillaScalarFieldEnum
    having?: PlantillaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlantillaCountAggregateInputType | true
    _avg?: PlantillaAvgAggregateInputType
    _sum?: PlantillaSumAggregateInputType
    _min?: PlantillaMinAggregateInputType
    _max?: PlantillaMaxAggregateInputType
  }

  export type PlantillaGroupByOutputType = {
    id: number
    nombre: string
    archivo: string
    activa: boolean
    createdAt: Date
    updatedAt: Date
    _count: PlantillaCountAggregateOutputType | null
    _avg: PlantillaAvgAggregateOutputType | null
    _sum: PlantillaSumAggregateOutputType | null
    _min: PlantillaMinAggregateOutputType | null
    _max: PlantillaMaxAggregateOutputType | null
  }

  type GetPlantillaGroupByPayload<T extends PlantillaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlantillaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlantillaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantillaGroupByOutputType[P]>
            : GetScalarType<T[P], PlantillaGroupByOutputType[P]>
        }
      >
    >


  export type PlantillaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    archivo?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trabajosImpresion?: boolean | Plantilla$trabajosImpresionArgs<ExtArgs>
    _count?: boolean | PlantillaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantilla"]>

  export type PlantillaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    archivo?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["plantilla"]>

  export type PlantillaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    archivo?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["plantilla"]>

  export type PlantillaSelectScalar = {
    id?: boolean
    nombre?: boolean
    archivo?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlantillaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "archivo" | "activa" | "createdAt" | "updatedAt", ExtArgs["result"]["plantilla"]>
  export type PlantillaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trabajosImpresion?: boolean | Plantilla$trabajosImpresionArgs<ExtArgs>
    _count?: boolean | PlantillaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlantillaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlantillaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlantillaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plantilla"
    objects: {
      trabajosImpresion: Prisma.$TrabajoImpresionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      archivo: string
      activa: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["plantilla"]>
    composites: {}
  }

  type PlantillaGetPayload<S extends boolean | null | undefined | PlantillaDefaultArgs> = $Result.GetResult<Prisma.$PlantillaPayload, S>

  type PlantillaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlantillaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlantillaCountAggregateInputType | true
    }

  export interface PlantillaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plantilla'], meta: { name: 'Plantilla' } }
    /**
     * Find zero or one Plantilla that matches the filter.
     * @param {PlantillaFindUniqueArgs} args - Arguments to find a Plantilla
     * @example
     * // Get one Plantilla
     * const plantilla = await prisma.plantilla.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlantillaFindUniqueArgs>(args: SelectSubset<T, PlantillaFindUniqueArgs<ExtArgs>>): Prisma__PlantillaClient<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plantilla that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlantillaFindUniqueOrThrowArgs} args - Arguments to find a Plantilla
     * @example
     * // Get one Plantilla
     * const plantilla = await prisma.plantilla.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlantillaFindUniqueOrThrowArgs>(args: SelectSubset<T, PlantillaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlantillaClient<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plantilla that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantillaFindFirstArgs} args - Arguments to find a Plantilla
     * @example
     * // Get one Plantilla
     * const plantilla = await prisma.plantilla.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlantillaFindFirstArgs>(args?: SelectSubset<T, PlantillaFindFirstArgs<ExtArgs>>): Prisma__PlantillaClient<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plantilla that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantillaFindFirstOrThrowArgs} args - Arguments to find a Plantilla
     * @example
     * // Get one Plantilla
     * const plantilla = await prisma.plantilla.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlantillaFindFirstOrThrowArgs>(args?: SelectSubset<T, PlantillaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlantillaClient<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plantillas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantillaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plantillas
     * const plantillas = await prisma.plantilla.findMany()
     * 
     * // Get first 10 Plantillas
     * const plantillas = await prisma.plantilla.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plantillaWithIdOnly = await prisma.plantilla.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlantillaFindManyArgs>(args?: SelectSubset<T, PlantillaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plantilla.
     * @param {PlantillaCreateArgs} args - Arguments to create a Plantilla.
     * @example
     * // Create one Plantilla
     * const Plantilla = await prisma.plantilla.create({
     *   data: {
     *     // ... data to create a Plantilla
     *   }
     * })
     * 
     */
    create<T extends PlantillaCreateArgs>(args: SelectSubset<T, PlantillaCreateArgs<ExtArgs>>): Prisma__PlantillaClient<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plantillas.
     * @param {PlantillaCreateManyArgs} args - Arguments to create many Plantillas.
     * @example
     * // Create many Plantillas
     * const plantilla = await prisma.plantilla.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlantillaCreateManyArgs>(args?: SelectSubset<T, PlantillaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plantillas and returns the data saved in the database.
     * @param {PlantillaCreateManyAndReturnArgs} args - Arguments to create many Plantillas.
     * @example
     * // Create many Plantillas
     * const plantilla = await prisma.plantilla.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plantillas and only return the `id`
     * const plantillaWithIdOnly = await prisma.plantilla.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlantillaCreateManyAndReturnArgs>(args?: SelectSubset<T, PlantillaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plantilla.
     * @param {PlantillaDeleteArgs} args - Arguments to delete one Plantilla.
     * @example
     * // Delete one Plantilla
     * const Plantilla = await prisma.plantilla.delete({
     *   where: {
     *     // ... filter to delete one Plantilla
     *   }
     * })
     * 
     */
    delete<T extends PlantillaDeleteArgs>(args: SelectSubset<T, PlantillaDeleteArgs<ExtArgs>>): Prisma__PlantillaClient<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plantilla.
     * @param {PlantillaUpdateArgs} args - Arguments to update one Plantilla.
     * @example
     * // Update one Plantilla
     * const plantilla = await prisma.plantilla.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlantillaUpdateArgs>(args: SelectSubset<T, PlantillaUpdateArgs<ExtArgs>>): Prisma__PlantillaClient<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plantillas.
     * @param {PlantillaDeleteManyArgs} args - Arguments to filter Plantillas to delete.
     * @example
     * // Delete a few Plantillas
     * const { count } = await prisma.plantilla.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlantillaDeleteManyArgs>(args?: SelectSubset<T, PlantillaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plantillas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantillaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plantillas
     * const plantilla = await prisma.plantilla.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlantillaUpdateManyArgs>(args: SelectSubset<T, PlantillaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plantillas and returns the data updated in the database.
     * @param {PlantillaUpdateManyAndReturnArgs} args - Arguments to update many Plantillas.
     * @example
     * // Update many Plantillas
     * const plantilla = await prisma.plantilla.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plantillas and only return the `id`
     * const plantillaWithIdOnly = await prisma.plantilla.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlantillaUpdateManyAndReturnArgs>(args: SelectSubset<T, PlantillaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plantilla.
     * @param {PlantillaUpsertArgs} args - Arguments to update or create a Plantilla.
     * @example
     * // Update or create a Plantilla
     * const plantilla = await prisma.plantilla.upsert({
     *   create: {
     *     // ... data to create a Plantilla
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plantilla we want to update
     *   }
     * })
     */
    upsert<T extends PlantillaUpsertArgs>(args: SelectSubset<T, PlantillaUpsertArgs<ExtArgs>>): Prisma__PlantillaClient<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plantillas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantillaCountArgs} args - Arguments to filter Plantillas to count.
     * @example
     * // Count the number of Plantillas
     * const count = await prisma.plantilla.count({
     *   where: {
     *     // ... the filter for the Plantillas we want to count
     *   }
     * })
    **/
    count<T extends PlantillaCountArgs>(
      args?: Subset<T, PlantillaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlantillaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plantilla.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantillaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlantillaAggregateArgs>(args: Subset<T, PlantillaAggregateArgs>): Prisma.PrismaPromise<GetPlantillaAggregateType<T>>

    /**
     * Group by Plantilla.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantillaGroupByArgs} args - Group by arguments.
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
      T extends PlantillaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlantillaGroupByArgs['orderBy'] }
        : { orderBy?: PlantillaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlantillaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantillaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plantilla model
   */
  readonly fields: PlantillaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plantilla.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlantillaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trabajosImpresion<T extends Plantilla$trabajosImpresionArgs<ExtArgs> = {}>(args?: Subset<T, Plantilla$trabajosImpresionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrabajoImpresionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Plantilla model
   */
  interface PlantillaFieldRefs {
    readonly id: FieldRef<"Plantilla", 'Int'>
    readonly nombre: FieldRef<"Plantilla", 'String'>
    readonly archivo: FieldRef<"Plantilla", 'String'>
    readonly activa: FieldRef<"Plantilla", 'Boolean'>
    readonly createdAt: FieldRef<"Plantilla", 'DateTime'>
    readonly updatedAt: FieldRef<"Plantilla", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plantilla findUnique
   */
  export type PlantillaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantillaInclude<ExtArgs> | null
    /**
     * Filter, which Plantilla to fetch.
     */
    where: PlantillaWhereUniqueInput
  }

  /**
   * Plantilla findUniqueOrThrow
   */
  export type PlantillaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantillaInclude<ExtArgs> | null
    /**
     * Filter, which Plantilla to fetch.
     */
    where: PlantillaWhereUniqueInput
  }

  /**
   * Plantilla findFirst
   */
  export type PlantillaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantillaInclude<ExtArgs> | null
    /**
     * Filter, which Plantilla to fetch.
     */
    where?: PlantillaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantillas to fetch.
     */
    orderBy?: PlantillaOrderByWithRelationInput | PlantillaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plantillas.
     */
    cursor?: PlantillaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantillas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantillas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plantillas.
     */
    distinct?: PlantillaScalarFieldEnum | PlantillaScalarFieldEnum[]
  }

  /**
   * Plantilla findFirstOrThrow
   */
  export type PlantillaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantillaInclude<ExtArgs> | null
    /**
     * Filter, which Plantilla to fetch.
     */
    where?: PlantillaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantillas to fetch.
     */
    orderBy?: PlantillaOrderByWithRelationInput | PlantillaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plantillas.
     */
    cursor?: PlantillaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantillas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantillas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plantillas.
     */
    distinct?: PlantillaScalarFieldEnum | PlantillaScalarFieldEnum[]
  }

  /**
   * Plantilla findMany
   */
  export type PlantillaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantillaInclude<ExtArgs> | null
    /**
     * Filter, which Plantillas to fetch.
     */
    where?: PlantillaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantillas to fetch.
     */
    orderBy?: PlantillaOrderByWithRelationInput | PlantillaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plantillas.
     */
    cursor?: PlantillaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantillas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantillas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plantillas.
     */
    distinct?: PlantillaScalarFieldEnum | PlantillaScalarFieldEnum[]
  }

  /**
   * Plantilla create
   */
  export type PlantillaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantillaInclude<ExtArgs> | null
    /**
     * The data needed to create a Plantilla.
     */
    data: XOR<PlantillaCreateInput, PlantillaUncheckedCreateInput>
  }

  /**
   * Plantilla createMany
   */
  export type PlantillaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plantillas.
     */
    data: PlantillaCreateManyInput | PlantillaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plantilla createManyAndReturn
   */
  export type PlantillaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * The data used to create many Plantillas.
     */
    data: PlantillaCreateManyInput | PlantillaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plantilla update
   */
  export type PlantillaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantillaInclude<ExtArgs> | null
    /**
     * The data needed to update a Plantilla.
     */
    data: XOR<PlantillaUpdateInput, PlantillaUncheckedUpdateInput>
    /**
     * Choose, which Plantilla to update.
     */
    where: PlantillaWhereUniqueInput
  }

  /**
   * Plantilla updateMany
   */
  export type PlantillaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plantillas.
     */
    data: XOR<PlantillaUpdateManyMutationInput, PlantillaUncheckedUpdateManyInput>
    /**
     * Filter which Plantillas to update
     */
    where?: PlantillaWhereInput
    /**
     * Limit how many Plantillas to update.
     */
    limit?: number
  }

  /**
   * Plantilla updateManyAndReturn
   */
  export type PlantillaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * The data used to update Plantillas.
     */
    data: XOR<PlantillaUpdateManyMutationInput, PlantillaUncheckedUpdateManyInput>
    /**
     * Filter which Plantillas to update
     */
    where?: PlantillaWhereInput
    /**
     * Limit how many Plantillas to update.
     */
    limit?: number
  }

  /**
   * Plantilla upsert
   */
  export type PlantillaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantillaInclude<ExtArgs> | null
    /**
     * The filter to search for the Plantilla to update in case it exists.
     */
    where: PlantillaWhereUniqueInput
    /**
     * In case the Plantilla found by the `where` argument doesn't exist, create a new Plantilla with this data.
     */
    create: XOR<PlantillaCreateInput, PlantillaUncheckedCreateInput>
    /**
     * In case the Plantilla was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlantillaUpdateInput, PlantillaUncheckedUpdateInput>
  }

  /**
   * Plantilla delete
   */
  export type PlantillaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantillaInclude<ExtArgs> | null
    /**
     * Filter which Plantilla to delete.
     */
    where: PlantillaWhereUniqueInput
  }

  /**
   * Plantilla deleteMany
   */
  export type PlantillaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plantillas to delete
     */
    where?: PlantillaWhereInput
    /**
     * Limit how many Plantillas to delete.
     */
    limit?: number
  }

  /**
   * Plantilla.trabajosImpresion
   */
  export type Plantilla$trabajosImpresionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabajoImpresion
     */
    select?: TrabajoImpresionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabajoImpresion
     */
    omit?: TrabajoImpresionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajoImpresionInclude<ExtArgs> | null
    where?: TrabajoImpresionWhereInput
    orderBy?: TrabajoImpresionOrderByWithRelationInput | TrabajoImpresionOrderByWithRelationInput[]
    cursor?: TrabajoImpresionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrabajoImpresionScalarFieldEnum | TrabajoImpresionScalarFieldEnum[]
  }

  /**
   * Plantilla without action
   */
  export type PlantillaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantillaInclude<ExtArgs> | null
  }


  /**
   * Model Lote
   */

  export type AggregateLote = {
    _count: LoteCountAggregateOutputType | null
    _avg: LoteAvgAggregateOutputType | null
    _sum: LoteSumAggregateOutputType | null
    _min: LoteMinAggregateOutputType | null
    _max: LoteMaxAggregateOutputType | null
  }

  export type LoteAvgAggregateOutputType = {
    id: number | null
    productoId: number | null
    fabricanteId: number | null
  }

  export type LoteSumAggregateOutputType = {
    id: number | null
    productoId: number | null
    fabricanteId: number | null
  }

  export type LoteMinAggregateOutputType = {
    id: number | null
    numeroLote: string | null
    fechaFabricacion: string | null
    fechaVencimiento: string | null
    fechaVencimientoOrden: Date | null
    coaUrl: string | null
    productoId: number | null
    fabricanteId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoteMaxAggregateOutputType = {
    id: number | null
    numeroLote: string | null
    fechaFabricacion: string | null
    fechaVencimiento: string | null
    fechaVencimientoOrden: Date | null
    coaUrl: string | null
    productoId: number | null
    fabricanteId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoteCountAggregateOutputType = {
    id: number
    numeroLote: number
    fechaFabricacion: number
    fechaVencimiento: number
    fechaVencimientoOrden: number
    coaUrl: number
    productoId: number
    fabricanteId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LoteAvgAggregateInputType = {
    id?: true
    productoId?: true
    fabricanteId?: true
  }

  export type LoteSumAggregateInputType = {
    id?: true
    productoId?: true
    fabricanteId?: true
  }

  export type LoteMinAggregateInputType = {
    id?: true
    numeroLote?: true
    fechaFabricacion?: true
    fechaVencimiento?: true
    fechaVencimientoOrden?: true
    coaUrl?: true
    productoId?: true
    fabricanteId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoteMaxAggregateInputType = {
    id?: true
    numeroLote?: true
    fechaFabricacion?: true
    fechaVencimiento?: true
    fechaVencimientoOrden?: true
    coaUrl?: true
    productoId?: true
    fabricanteId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoteCountAggregateInputType = {
    id?: true
    numeroLote?: true
    fechaFabricacion?: true
    fechaVencimiento?: true
    fechaVencimientoOrden?: true
    coaUrl?: true
    productoId?: true
    fabricanteId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lote to aggregate.
     */
    where?: LoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotes to fetch.
     */
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lotes
    **/
    _count?: true | LoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoteMaxAggregateInputType
  }

  export type GetLoteAggregateType<T extends LoteAggregateArgs> = {
        [P in keyof T & keyof AggregateLote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLote[P]>
      : GetScalarType<T[P], AggregateLote[P]>
  }




  export type LoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoteWhereInput
    orderBy?: LoteOrderByWithAggregationInput | LoteOrderByWithAggregationInput[]
    by: LoteScalarFieldEnum[] | LoteScalarFieldEnum
    having?: LoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoteCountAggregateInputType | true
    _avg?: LoteAvgAggregateInputType
    _sum?: LoteSumAggregateInputType
    _min?: LoteMinAggregateInputType
    _max?: LoteMaxAggregateInputType
  }

  export type LoteGroupByOutputType = {
    id: number
    numeroLote: string
    fechaFabricacion: string
    fechaVencimiento: string
    fechaVencimientoOrden: Date | null
    coaUrl: string | null
    productoId: number
    fabricanteId: number
    createdAt: Date
    updatedAt: Date
    _count: LoteCountAggregateOutputType | null
    _avg: LoteAvgAggregateOutputType | null
    _sum: LoteSumAggregateOutputType | null
    _min: LoteMinAggregateOutputType | null
    _max: LoteMaxAggregateOutputType | null
  }

  type GetLoteGroupByPayload<T extends LoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoteGroupByOutputType[P]>
            : GetScalarType<T[P], LoteGroupByOutputType[P]>
        }
      >
    >


  export type LoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroLote?: boolean
    fechaFabricacion?: boolean
    fechaVencimiento?: boolean
    fechaVencimientoOrden?: boolean
    coaUrl?: boolean
    productoId?: boolean
    fabricanteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    fabricante?: boolean | FabricanteDefaultArgs<ExtArgs>
    trabajosImpresion?: boolean | Lote$trabajosImpresionArgs<ExtArgs>
    _count?: boolean | LoteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lote"]>

  export type LoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroLote?: boolean
    fechaFabricacion?: boolean
    fechaVencimiento?: boolean
    fechaVencimientoOrden?: boolean
    coaUrl?: boolean
    productoId?: boolean
    fabricanteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    fabricante?: boolean | FabricanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lote"]>

  export type LoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroLote?: boolean
    fechaFabricacion?: boolean
    fechaVencimiento?: boolean
    fechaVencimientoOrden?: boolean
    coaUrl?: boolean
    productoId?: boolean
    fabricanteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    fabricante?: boolean | FabricanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lote"]>

  export type LoteSelectScalar = {
    id?: boolean
    numeroLote?: boolean
    fechaFabricacion?: boolean
    fechaVencimiento?: boolean
    fechaVencimientoOrden?: boolean
    coaUrl?: boolean
    productoId?: boolean
    fabricanteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numeroLote" | "fechaFabricacion" | "fechaVencimiento" | "fechaVencimientoOrden" | "coaUrl" | "productoId" | "fabricanteId" | "createdAt" | "updatedAt", ExtArgs["result"]["lote"]>
  export type LoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    fabricante?: boolean | FabricanteDefaultArgs<ExtArgs>
    trabajosImpresion?: boolean | Lote$trabajosImpresionArgs<ExtArgs>
    _count?: boolean | LoteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    fabricante?: boolean | FabricanteDefaultArgs<ExtArgs>
  }
  export type LoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    fabricante?: boolean | FabricanteDefaultArgs<ExtArgs>
  }

  export type $LotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lote"
    objects: {
      producto: Prisma.$ProductoPayload<ExtArgs>
      fabricante: Prisma.$FabricantePayload<ExtArgs>
      trabajosImpresion: Prisma.$TrabajoImpresionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numeroLote: string
      fechaFabricacion: string
      fechaVencimiento: string
      fechaVencimientoOrden: Date | null
      coaUrl: string | null
      productoId: number
      fabricanteId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lote"]>
    composites: {}
  }

  type LoteGetPayload<S extends boolean | null | undefined | LoteDefaultArgs> = $Result.GetResult<Prisma.$LotePayload, S>

  type LoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoteCountAggregateInputType | true
    }

  export interface LoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lote'], meta: { name: 'Lote' } }
    /**
     * Find zero or one Lote that matches the filter.
     * @param {LoteFindUniqueArgs} args - Arguments to find a Lote
     * @example
     * // Get one Lote
     * const lote = await prisma.lote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoteFindUniqueArgs>(args: SelectSubset<T, LoteFindUniqueArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoteFindUniqueOrThrowArgs} args - Arguments to find a Lote
     * @example
     * // Get one Lote
     * const lote = await prisma.lote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoteFindUniqueOrThrowArgs>(args: SelectSubset<T, LoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteFindFirstArgs} args - Arguments to find a Lote
     * @example
     * // Get one Lote
     * const lote = await prisma.lote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoteFindFirstArgs>(args?: SelectSubset<T, LoteFindFirstArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteFindFirstOrThrowArgs} args - Arguments to find a Lote
     * @example
     * // Get one Lote
     * const lote = await prisma.lote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoteFindFirstOrThrowArgs>(args?: SelectSubset<T, LoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lotes
     * const lotes = await prisma.lote.findMany()
     * 
     * // Get first 10 Lotes
     * const lotes = await prisma.lote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loteWithIdOnly = await prisma.lote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoteFindManyArgs>(args?: SelectSubset<T, LoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lote.
     * @param {LoteCreateArgs} args - Arguments to create a Lote.
     * @example
     * // Create one Lote
     * const Lote = await prisma.lote.create({
     *   data: {
     *     // ... data to create a Lote
     *   }
     * })
     * 
     */
    create<T extends LoteCreateArgs>(args: SelectSubset<T, LoteCreateArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lotes.
     * @param {LoteCreateManyArgs} args - Arguments to create many Lotes.
     * @example
     * // Create many Lotes
     * const lote = await prisma.lote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoteCreateManyArgs>(args?: SelectSubset<T, LoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lotes and returns the data saved in the database.
     * @param {LoteCreateManyAndReturnArgs} args - Arguments to create many Lotes.
     * @example
     * // Create many Lotes
     * const lote = await prisma.lote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lotes and only return the `id`
     * const loteWithIdOnly = await prisma.lote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoteCreateManyAndReturnArgs>(args?: SelectSubset<T, LoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lote.
     * @param {LoteDeleteArgs} args - Arguments to delete one Lote.
     * @example
     * // Delete one Lote
     * const Lote = await prisma.lote.delete({
     *   where: {
     *     // ... filter to delete one Lote
     *   }
     * })
     * 
     */
    delete<T extends LoteDeleteArgs>(args: SelectSubset<T, LoteDeleteArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lote.
     * @param {LoteUpdateArgs} args - Arguments to update one Lote.
     * @example
     * // Update one Lote
     * const lote = await prisma.lote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoteUpdateArgs>(args: SelectSubset<T, LoteUpdateArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lotes.
     * @param {LoteDeleteManyArgs} args - Arguments to filter Lotes to delete.
     * @example
     * // Delete a few Lotes
     * const { count } = await prisma.lote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoteDeleteManyArgs>(args?: SelectSubset<T, LoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lotes
     * const lote = await prisma.lote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoteUpdateManyArgs>(args: SelectSubset<T, LoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lotes and returns the data updated in the database.
     * @param {LoteUpdateManyAndReturnArgs} args - Arguments to update many Lotes.
     * @example
     * // Update many Lotes
     * const lote = await prisma.lote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lotes and only return the `id`
     * const loteWithIdOnly = await prisma.lote.updateManyAndReturn({
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
    updateManyAndReturn<T extends LoteUpdateManyAndReturnArgs>(args: SelectSubset<T, LoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lote.
     * @param {LoteUpsertArgs} args - Arguments to update or create a Lote.
     * @example
     * // Update or create a Lote
     * const lote = await prisma.lote.upsert({
     *   create: {
     *     // ... data to create a Lote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lote we want to update
     *   }
     * })
     */
    upsert<T extends LoteUpsertArgs>(args: SelectSubset<T, LoteUpsertArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteCountArgs} args - Arguments to filter Lotes to count.
     * @example
     * // Count the number of Lotes
     * const count = await prisma.lote.count({
     *   where: {
     *     // ... the filter for the Lotes we want to count
     *   }
     * })
    **/
    count<T extends LoteCountArgs>(
      args?: Subset<T, LoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoteAggregateArgs>(args: Subset<T, LoteAggregateArgs>): Prisma.PrismaPromise<GetLoteAggregateType<T>>

    /**
     * Group by Lote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteGroupByArgs} args - Group by arguments.
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
      T extends LoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoteGroupByArgs['orderBy'] }
        : { orderBy?: LoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lote model
   */
  readonly fields: LoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fabricante<T extends FabricanteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FabricanteDefaultArgs<ExtArgs>>): Prisma__FabricanteClient<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trabajosImpresion<T extends Lote$trabajosImpresionArgs<ExtArgs> = {}>(args?: Subset<T, Lote$trabajosImpresionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrabajoImpresionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lote model
   */
  interface LoteFieldRefs {
    readonly id: FieldRef<"Lote", 'Int'>
    readonly numeroLote: FieldRef<"Lote", 'String'>
    readonly fechaFabricacion: FieldRef<"Lote", 'String'>
    readonly fechaVencimiento: FieldRef<"Lote", 'String'>
    readonly fechaVencimientoOrden: FieldRef<"Lote", 'DateTime'>
    readonly coaUrl: FieldRef<"Lote", 'String'>
    readonly productoId: FieldRef<"Lote", 'Int'>
    readonly fabricanteId: FieldRef<"Lote", 'Int'>
    readonly createdAt: FieldRef<"Lote", 'DateTime'>
    readonly updatedAt: FieldRef<"Lote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lote findUnique
   */
  export type LoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter, which Lote to fetch.
     */
    where: LoteWhereUniqueInput
  }

  /**
   * Lote findUniqueOrThrow
   */
  export type LoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter, which Lote to fetch.
     */
    where: LoteWhereUniqueInput
  }

  /**
   * Lote findFirst
   */
  export type LoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter, which Lote to fetch.
     */
    where?: LoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotes to fetch.
     */
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lotes.
     */
    cursor?: LoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lotes.
     */
    distinct?: LoteScalarFieldEnum | LoteScalarFieldEnum[]
  }

  /**
   * Lote findFirstOrThrow
   */
  export type LoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter, which Lote to fetch.
     */
    where?: LoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotes to fetch.
     */
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lotes.
     */
    cursor?: LoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lotes.
     */
    distinct?: LoteScalarFieldEnum | LoteScalarFieldEnum[]
  }

  /**
   * Lote findMany
   */
  export type LoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter, which Lotes to fetch.
     */
    where?: LoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lotes to fetch.
     */
    orderBy?: LoteOrderByWithRelationInput | LoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lotes.
     */
    cursor?: LoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lotes.
     */
    distinct?: LoteScalarFieldEnum | LoteScalarFieldEnum[]
  }

  /**
   * Lote create
   */
  export type LoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Lote.
     */
    data: XOR<LoteCreateInput, LoteUncheckedCreateInput>
  }

  /**
   * Lote createMany
   */
  export type LoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lotes.
     */
    data: LoteCreateManyInput | LoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lote createManyAndReturn
   */
  export type LoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * The data used to create many Lotes.
     */
    data: LoteCreateManyInput | LoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lote update
   */
  export type LoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Lote.
     */
    data: XOR<LoteUpdateInput, LoteUncheckedUpdateInput>
    /**
     * Choose, which Lote to update.
     */
    where: LoteWhereUniqueInput
  }

  /**
   * Lote updateMany
   */
  export type LoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lotes.
     */
    data: XOR<LoteUpdateManyMutationInput, LoteUncheckedUpdateManyInput>
    /**
     * Filter which Lotes to update
     */
    where?: LoteWhereInput
    /**
     * Limit how many Lotes to update.
     */
    limit?: number
  }

  /**
   * Lote updateManyAndReturn
   */
  export type LoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * The data used to update Lotes.
     */
    data: XOR<LoteUpdateManyMutationInput, LoteUncheckedUpdateManyInput>
    /**
     * Filter which Lotes to update
     */
    where?: LoteWhereInput
    /**
     * Limit how many Lotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lote upsert
   */
  export type LoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Lote to update in case it exists.
     */
    where: LoteWhereUniqueInput
    /**
     * In case the Lote found by the `where` argument doesn't exist, create a new Lote with this data.
     */
    create: XOR<LoteCreateInput, LoteUncheckedCreateInput>
    /**
     * In case the Lote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoteUpdateInput, LoteUncheckedUpdateInput>
  }

  /**
   * Lote delete
   */
  export type LoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
    /**
     * Filter which Lote to delete.
     */
    where: LoteWhereUniqueInput
  }

  /**
   * Lote deleteMany
   */
  export type LoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lotes to delete
     */
    where?: LoteWhereInput
    /**
     * Limit how many Lotes to delete.
     */
    limit?: number
  }

  /**
   * Lote.trabajosImpresion
   */
  export type Lote$trabajosImpresionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabajoImpresion
     */
    select?: TrabajoImpresionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabajoImpresion
     */
    omit?: TrabajoImpresionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajoImpresionInclude<ExtArgs> | null
    where?: TrabajoImpresionWhereInput
    orderBy?: TrabajoImpresionOrderByWithRelationInput | TrabajoImpresionOrderByWithRelationInput[]
    cursor?: TrabajoImpresionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrabajoImpresionScalarFieldEnum | TrabajoImpresionScalarFieldEnum[]
  }

  /**
   * Lote without action
   */
  export type LoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: LoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote
     */
    omit?: LoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoteInclude<ExtArgs> | null
  }


  /**
   * Model TrabajoImpresion
   */

  export type AggregateTrabajoImpresion = {
    _count: TrabajoImpresionCountAggregateOutputType | null
    _avg: TrabajoImpresionAvgAggregateOutputType | null
    _sum: TrabajoImpresionSumAggregateOutputType | null
    _min: TrabajoImpresionMinAggregateOutputType | null
    _max: TrabajoImpresionMaxAggregateOutputType | null
  }

  export type TrabajoImpresionAvgAggregateOutputType = {
    id: number | null
    loteId: number | null
    plantillaId: number | null
    creadoPorId: number | null
  }

  export type TrabajoImpresionSumAggregateOutputType = {
    id: number | null
    loteId: number | null
    plantillaId: number | null
    creadoPorId: number | null
  }

  export type TrabajoImpresionMinAggregateOutputType = {
    id: number | null
    loteId: number | null
    plantillaId: number | null
    pesoBruto: string | null
    unidadBruto: string | null
    cantidadNeta: string | null
    unidadNeta: string | null
    proforma: string | null
    imagenPath: string | null
    estado: $Enums.EstadoTrabajoImpresion | null
    mensajeError: string | null
    creadoPorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrabajoImpresionMaxAggregateOutputType = {
    id: number | null
    loteId: number | null
    plantillaId: number | null
    pesoBruto: string | null
    unidadBruto: string | null
    cantidadNeta: string | null
    unidadNeta: string | null
    proforma: string | null
    imagenPath: string | null
    estado: $Enums.EstadoTrabajoImpresion | null
    mensajeError: string | null
    creadoPorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrabajoImpresionCountAggregateOutputType = {
    id: number
    loteId: number
    plantillaId: number
    pesoBruto: number
    unidadBruto: number
    cantidadNeta: number
    unidadNeta: number
    proforma: number
    imagenPath: number
    estado: number
    mensajeError: number
    creadoPorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TrabajoImpresionAvgAggregateInputType = {
    id?: true
    loteId?: true
    plantillaId?: true
    creadoPorId?: true
  }

  export type TrabajoImpresionSumAggregateInputType = {
    id?: true
    loteId?: true
    plantillaId?: true
    creadoPorId?: true
  }

  export type TrabajoImpresionMinAggregateInputType = {
    id?: true
    loteId?: true
    plantillaId?: true
    pesoBruto?: true
    unidadBruto?: true
    cantidadNeta?: true
    unidadNeta?: true
    proforma?: true
    imagenPath?: true
    estado?: true
    mensajeError?: true
    creadoPorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrabajoImpresionMaxAggregateInputType = {
    id?: true
    loteId?: true
    plantillaId?: true
    pesoBruto?: true
    unidadBruto?: true
    cantidadNeta?: true
    unidadNeta?: true
    proforma?: true
    imagenPath?: true
    estado?: true
    mensajeError?: true
    creadoPorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrabajoImpresionCountAggregateInputType = {
    id?: true
    loteId?: true
    plantillaId?: true
    pesoBruto?: true
    unidadBruto?: true
    cantidadNeta?: true
    unidadNeta?: true
    proforma?: true
    imagenPath?: true
    estado?: true
    mensajeError?: true
    creadoPorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrabajoImpresionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrabajoImpresion to aggregate.
     */
    where?: TrabajoImpresionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrabajoImpresions to fetch.
     */
    orderBy?: TrabajoImpresionOrderByWithRelationInput | TrabajoImpresionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrabajoImpresionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrabajoImpresions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrabajoImpresions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrabajoImpresions
    **/
    _count?: true | TrabajoImpresionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrabajoImpresionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrabajoImpresionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrabajoImpresionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrabajoImpresionMaxAggregateInputType
  }

  export type GetTrabajoImpresionAggregateType<T extends TrabajoImpresionAggregateArgs> = {
        [P in keyof T & keyof AggregateTrabajoImpresion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrabajoImpresion[P]>
      : GetScalarType<T[P], AggregateTrabajoImpresion[P]>
  }




  export type TrabajoImpresionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrabajoImpresionWhereInput
    orderBy?: TrabajoImpresionOrderByWithAggregationInput | TrabajoImpresionOrderByWithAggregationInput[]
    by: TrabajoImpresionScalarFieldEnum[] | TrabajoImpresionScalarFieldEnum
    having?: TrabajoImpresionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrabajoImpresionCountAggregateInputType | true
    _avg?: TrabajoImpresionAvgAggregateInputType
    _sum?: TrabajoImpresionSumAggregateInputType
    _min?: TrabajoImpresionMinAggregateInputType
    _max?: TrabajoImpresionMaxAggregateInputType
  }

  export type TrabajoImpresionGroupByOutputType = {
    id: number
    loteId: number
    plantillaId: number
    pesoBruto: string
    unidadBruto: string
    cantidadNeta: string | null
    unidadNeta: string
    proforma: string
    imagenPath: string | null
    estado: $Enums.EstadoTrabajoImpresion
    mensajeError: string | null
    creadoPorId: number
    createdAt: Date
    updatedAt: Date
    _count: TrabajoImpresionCountAggregateOutputType | null
    _avg: TrabajoImpresionAvgAggregateOutputType | null
    _sum: TrabajoImpresionSumAggregateOutputType | null
    _min: TrabajoImpresionMinAggregateOutputType | null
    _max: TrabajoImpresionMaxAggregateOutputType | null
  }

  type GetTrabajoImpresionGroupByPayload<T extends TrabajoImpresionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrabajoImpresionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrabajoImpresionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrabajoImpresionGroupByOutputType[P]>
            : GetScalarType<T[P], TrabajoImpresionGroupByOutputType[P]>
        }
      >
    >


  export type TrabajoImpresionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loteId?: boolean
    plantillaId?: boolean
    pesoBruto?: boolean
    unidadBruto?: boolean
    cantidadNeta?: boolean
    unidadNeta?: boolean
    proforma?: boolean
    imagenPath?: boolean
    estado?: boolean
    mensajeError?: boolean
    creadoPorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lote?: boolean | LoteDefaultArgs<ExtArgs>
    plantilla?: boolean | PlantillaDefaultArgs<ExtArgs>
    creadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trabajoImpresion"]>

  export type TrabajoImpresionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loteId?: boolean
    plantillaId?: boolean
    pesoBruto?: boolean
    unidadBruto?: boolean
    cantidadNeta?: boolean
    unidadNeta?: boolean
    proforma?: boolean
    imagenPath?: boolean
    estado?: boolean
    mensajeError?: boolean
    creadoPorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lote?: boolean | LoteDefaultArgs<ExtArgs>
    plantilla?: boolean | PlantillaDefaultArgs<ExtArgs>
    creadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trabajoImpresion"]>

  export type TrabajoImpresionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loteId?: boolean
    plantillaId?: boolean
    pesoBruto?: boolean
    unidadBruto?: boolean
    cantidadNeta?: boolean
    unidadNeta?: boolean
    proforma?: boolean
    imagenPath?: boolean
    estado?: boolean
    mensajeError?: boolean
    creadoPorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lote?: boolean | LoteDefaultArgs<ExtArgs>
    plantilla?: boolean | PlantillaDefaultArgs<ExtArgs>
    creadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trabajoImpresion"]>

  export type TrabajoImpresionSelectScalar = {
    id?: boolean
    loteId?: boolean
    plantillaId?: boolean
    pesoBruto?: boolean
    unidadBruto?: boolean
    cantidadNeta?: boolean
    unidadNeta?: boolean
    proforma?: boolean
    imagenPath?: boolean
    estado?: boolean
    mensajeError?: boolean
    creadoPorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TrabajoImpresionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "loteId" | "plantillaId" | "pesoBruto" | "unidadBruto" | "cantidadNeta" | "unidadNeta" | "proforma" | "imagenPath" | "estado" | "mensajeError" | "creadoPorId" | "createdAt" | "updatedAt", ExtArgs["result"]["trabajoImpresion"]>
  export type TrabajoImpresionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lote?: boolean | LoteDefaultArgs<ExtArgs>
    plantilla?: boolean | PlantillaDefaultArgs<ExtArgs>
    creadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type TrabajoImpresionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lote?: boolean | LoteDefaultArgs<ExtArgs>
    plantilla?: boolean | PlantillaDefaultArgs<ExtArgs>
    creadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type TrabajoImpresionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lote?: boolean | LoteDefaultArgs<ExtArgs>
    plantilla?: boolean | PlantillaDefaultArgs<ExtArgs>
    creadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $TrabajoImpresionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrabajoImpresion"
    objects: {
      lote: Prisma.$LotePayload<ExtArgs>
      plantilla: Prisma.$PlantillaPayload<ExtArgs>
      creadoPor: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      loteId: number
      plantillaId: number
      pesoBruto: string
      unidadBruto: string
      cantidadNeta: string | null
      unidadNeta: string
      proforma: string
      imagenPath: string | null
      estado: $Enums.EstadoTrabajoImpresion
      mensajeError: string | null
      creadoPorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trabajoImpresion"]>
    composites: {}
  }

  type TrabajoImpresionGetPayload<S extends boolean | null | undefined | TrabajoImpresionDefaultArgs> = $Result.GetResult<Prisma.$TrabajoImpresionPayload, S>

  type TrabajoImpresionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrabajoImpresionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrabajoImpresionCountAggregateInputType | true
    }

  export interface TrabajoImpresionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrabajoImpresion'], meta: { name: 'TrabajoImpresion' } }
    /**
     * Find zero or one TrabajoImpresion that matches the filter.
     * @param {TrabajoImpresionFindUniqueArgs} args - Arguments to find a TrabajoImpresion
     * @example
     * // Get one TrabajoImpresion
     * const trabajoImpresion = await prisma.trabajoImpresion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrabajoImpresionFindUniqueArgs>(args: SelectSubset<T, TrabajoImpresionFindUniqueArgs<ExtArgs>>): Prisma__TrabajoImpresionClient<$Result.GetResult<Prisma.$TrabajoImpresionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrabajoImpresion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrabajoImpresionFindUniqueOrThrowArgs} args - Arguments to find a TrabajoImpresion
     * @example
     * // Get one TrabajoImpresion
     * const trabajoImpresion = await prisma.trabajoImpresion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrabajoImpresionFindUniqueOrThrowArgs>(args: SelectSubset<T, TrabajoImpresionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrabajoImpresionClient<$Result.GetResult<Prisma.$TrabajoImpresionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrabajoImpresion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajoImpresionFindFirstArgs} args - Arguments to find a TrabajoImpresion
     * @example
     * // Get one TrabajoImpresion
     * const trabajoImpresion = await prisma.trabajoImpresion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrabajoImpresionFindFirstArgs>(args?: SelectSubset<T, TrabajoImpresionFindFirstArgs<ExtArgs>>): Prisma__TrabajoImpresionClient<$Result.GetResult<Prisma.$TrabajoImpresionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrabajoImpresion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajoImpresionFindFirstOrThrowArgs} args - Arguments to find a TrabajoImpresion
     * @example
     * // Get one TrabajoImpresion
     * const trabajoImpresion = await prisma.trabajoImpresion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrabajoImpresionFindFirstOrThrowArgs>(args?: SelectSubset<T, TrabajoImpresionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrabajoImpresionClient<$Result.GetResult<Prisma.$TrabajoImpresionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrabajoImpresions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajoImpresionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrabajoImpresions
     * const trabajoImpresions = await prisma.trabajoImpresion.findMany()
     * 
     * // Get first 10 TrabajoImpresions
     * const trabajoImpresions = await prisma.trabajoImpresion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trabajoImpresionWithIdOnly = await prisma.trabajoImpresion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrabajoImpresionFindManyArgs>(args?: SelectSubset<T, TrabajoImpresionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrabajoImpresionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrabajoImpresion.
     * @param {TrabajoImpresionCreateArgs} args - Arguments to create a TrabajoImpresion.
     * @example
     * // Create one TrabajoImpresion
     * const TrabajoImpresion = await prisma.trabajoImpresion.create({
     *   data: {
     *     // ... data to create a TrabajoImpresion
     *   }
     * })
     * 
     */
    create<T extends TrabajoImpresionCreateArgs>(args: SelectSubset<T, TrabajoImpresionCreateArgs<ExtArgs>>): Prisma__TrabajoImpresionClient<$Result.GetResult<Prisma.$TrabajoImpresionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrabajoImpresions.
     * @param {TrabajoImpresionCreateManyArgs} args - Arguments to create many TrabajoImpresions.
     * @example
     * // Create many TrabajoImpresions
     * const trabajoImpresion = await prisma.trabajoImpresion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrabajoImpresionCreateManyArgs>(args?: SelectSubset<T, TrabajoImpresionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrabajoImpresions and returns the data saved in the database.
     * @param {TrabajoImpresionCreateManyAndReturnArgs} args - Arguments to create many TrabajoImpresions.
     * @example
     * // Create many TrabajoImpresions
     * const trabajoImpresion = await prisma.trabajoImpresion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrabajoImpresions and only return the `id`
     * const trabajoImpresionWithIdOnly = await prisma.trabajoImpresion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrabajoImpresionCreateManyAndReturnArgs>(args?: SelectSubset<T, TrabajoImpresionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrabajoImpresionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrabajoImpresion.
     * @param {TrabajoImpresionDeleteArgs} args - Arguments to delete one TrabajoImpresion.
     * @example
     * // Delete one TrabajoImpresion
     * const TrabajoImpresion = await prisma.trabajoImpresion.delete({
     *   where: {
     *     // ... filter to delete one TrabajoImpresion
     *   }
     * })
     * 
     */
    delete<T extends TrabajoImpresionDeleteArgs>(args: SelectSubset<T, TrabajoImpresionDeleteArgs<ExtArgs>>): Prisma__TrabajoImpresionClient<$Result.GetResult<Prisma.$TrabajoImpresionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrabajoImpresion.
     * @param {TrabajoImpresionUpdateArgs} args - Arguments to update one TrabajoImpresion.
     * @example
     * // Update one TrabajoImpresion
     * const trabajoImpresion = await prisma.trabajoImpresion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrabajoImpresionUpdateArgs>(args: SelectSubset<T, TrabajoImpresionUpdateArgs<ExtArgs>>): Prisma__TrabajoImpresionClient<$Result.GetResult<Prisma.$TrabajoImpresionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrabajoImpresions.
     * @param {TrabajoImpresionDeleteManyArgs} args - Arguments to filter TrabajoImpresions to delete.
     * @example
     * // Delete a few TrabajoImpresions
     * const { count } = await prisma.trabajoImpresion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrabajoImpresionDeleteManyArgs>(args?: SelectSubset<T, TrabajoImpresionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrabajoImpresions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajoImpresionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrabajoImpresions
     * const trabajoImpresion = await prisma.trabajoImpresion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrabajoImpresionUpdateManyArgs>(args: SelectSubset<T, TrabajoImpresionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrabajoImpresions and returns the data updated in the database.
     * @param {TrabajoImpresionUpdateManyAndReturnArgs} args - Arguments to update many TrabajoImpresions.
     * @example
     * // Update many TrabajoImpresions
     * const trabajoImpresion = await prisma.trabajoImpresion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrabajoImpresions and only return the `id`
     * const trabajoImpresionWithIdOnly = await prisma.trabajoImpresion.updateManyAndReturn({
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
    updateManyAndReturn<T extends TrabajoImpresionUpdateManyAndReturnArgs>(args: SelectSubset<T, TrabajoImpresionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrabajoImpresionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrabajoImpresion.
     * @param {TrabajoImpresionUpsertArgs} args - Arguments to update or create a TrabajoImpresion.
     * @example
     * // Update or create a TrabajoImpresion
     * const trabajoImpresion = await prisma.trabajoImpresion.upsert({
     *   create: {
     *     // ... data to create a TrabajoImpresion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrabajoImpresion we want to update
     *   }
     * })
     */
    upsert<T extends TrabajoImpresionUpsertArgs>(args: SelectSubset<T, TrabajoImpresionUpsertArgs<ExtArgs>>): Prisma__TrabajoImpresionClient<$Result.GetResult<Prisma.$TrabajoImpresionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrabajoImpresions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajoImpresionCountArgs} args - Arguments to filter TrabajoImpresions to count.
     * @example
     * // Count the number of TrabajoImpresions
     * const count = await prisma.trabajoImpresion.count({
     *   where: {
     *     // ... the filter for the TrabajoImpresions we want to count
     *   }
     * })
    **/
    count<T extends TrabajoImpresionCountArgs>(
      args?: Subset<T, TrabajoImpresionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrabajoImpresionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrabajoImpresion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajoImpresionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrabajoImpresionAggregateArgs>(args: Subset<T, TrabajoImpresionAggregateArgs>): Prisma.PrismaPromise<GetTrabajoImpresionAggregateType<T>>

    /**
     * Group by TrabajoImpresion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajoImpresionGroupByArgs} args - Group by arguments.
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
      T extends TrabajoImpresionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrabajoImpresionGroupByArgs['orderBy'] }
        : { orderBy?: TrabajoImpresionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrabajoImpresionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrabajoImpresionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrabajoImpresion model
   */
  readonly fields: TrabajoImpresionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrabajoImpresion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrabajoImpresionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lote<T extends LoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LoteDefaultArgs<ExtArgs>>): Prisma__LoteClient<$Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plantilla<T extends PlantillaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlantillaDefaultArgs<ExtArgs>>): Prisma__PlantillaClient<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creadoPor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TrabajoImpresion model
   */
  interface TrabajoImpresionFieldRefs {
    readonly id: FieldRef<"TrabajoImpresion", 'Int'>
    readonly loteId: FieldRef<"TrabajoImpresion", 'Int'>
    readonly plantillaId: FieldRef<"TrabajoImpresion", 'Int'>
    readonly pesoBruto: FieldRef<"TrabajoImpresion", 'String'>
    readonly unidadBruto: FieldRef<"TrabajoImpresion", 'String'>
    readonly cantidadNeta: FieldRef<"TrabajoImpresion", 'String'>
    readonly unidadNeta: FieldRef<"TrabajoImpresion", 'String'>
    readonly proforma: FieldRef<"TrabajoImpresion", 'String'>
    readonly imagenPath: FieldRef<"TrabajoImpresion", 'String'>
    readonly estado: FieldRef<"TrabajoImpresion", 'EstadoTrabajoImpresion'>
    readonly mensajeError: FieldRef<"TrabajoImpresion", 'String'>
    readonly creadoPorId: FieldRef<"TrabajoImpresion", 'Int'>
    readonly createdAt: FieldRef<"TrabajoImpresion", 'DateTime'>
    readonly updatedAt: FieldRef<"TrabajoImpresion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrabajoImpresion findUnique
   */
  export type TrabajoImpresionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabajoImpresion
     */
    select?: TrabajoImpresionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabajoImpresion
     */
    omit?: TrabajoImpresionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajoImpresionInclude<ExtArgs> | null
    /**
     * Filter, which TrabajoImpresion to fetch.
     */
    where: TrabajoImpresionWhereUniqueInput
  }

  /**
   * TrabajoImpresion findUniqueOrThrow
   */
  export type TrabajoImpresionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabajoImpresion
     */
    select?: TrabajoImpresionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabajoImpresion
     */
    omit?: TrabajoImpresionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajoImpresionInclude<ExtArgs> | null
    /**
     * Filter, which TrabajoImpresion to fetch.
     */
    where: TrabajoImpresionWhereUniqueInput
  }

  /**
   * TrabajoImpresion findFirst
   */
  export type TrabajoImpresionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabajoImpresion
     */
    select?: TrabajoImpresionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabajoImpresion
     */
    omit?: TrabajoImpresionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajoImpresionInclude<ExtArgs> | null
    /**
     * Filter, which TrabajoImpresion to fetch.
     */
    where?: TrabajoImpresionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrabajoImpresions to fetch.
     */
    orderBy?: TrabajoImpresionOrderByWithRelationInput | TrabajoImpresionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrabajoImpresions.
     */
    cursor?: TrabajoImpresionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrabajoImpresions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrabajoImpresions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrabajoImpresions.
     */
    distinct?: TrabajoImpresionScalarFieldEnum | TrabajoImpresionScalarFieldEnum[]
  }

  /**
   * TrabajoImpresion findFirstOrThrow
   */
  export type TrabajoImpresionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabajoImpresion
     */
    select?: TrabajoImpresionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabajoImpresion
     */
    omit?: TrabajoImpresionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajoImpresionInclude<ExtArgs> | null
    /**
     * Filter, which TrabajoImpresion to fetch.
     */
    where?: TrabajoImpresionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrabajoImpresions to fetch.
     */
    orderBy?: TrabajoImpresionOrderByWithRelationInput | TrabajoImpresionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrabajoImpresions.
     */
    cursor?: TrabajoImpresionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrabajoImpresions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrabajoImpresions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrabajoImpresions.
     */
    distinct?: TrabajoImpresionScalarFieldEnum | TrabajoImpresionScalarFieldEnum[]
  }

  /**
   * TrabajoImpresion findMany
   */
  export type TrabajoImpresionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabajoImpresion
     */
    select?: TrabajoImpresionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabajoImpresion
     */
    omit?: TrabajoImpresionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajoImpresionInclude<ExtArgs> | null
    /**
     * Filter, which TrabajoImpresions to fetch.
     */
    where?: TrabajoImpresionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrabajoImpresions to fetch.
     */
    orderBy?: TrabajoImpresionOrderByWithRelationInput | TrabajoImpresionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrabajoImpresions.
     */
    cursor?: TrabajoImpresionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrabajoImpresions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrabajoImpresions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrabajoImpresions.
     */
    distinct?: TrabajoImpresionScalarFieldEnum | TrabajoImpresionScalarFieldEnum[]
  }

  /**
   * TrabajoImpresion create
   */
  export type TrabajoImpresionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabajoImpresion
     */
    select?: TrabajoImpresionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabajoImpresion
     */
    omit?: TrabajoImpresionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajoImpresionInclude<ExtArgs> | null
    /**
     * The data needed to create a TrabajoImpresion.
     */
    data: XOR<TrabajoImpresionCreateInput, TrabajoImpresionUncheckedCreateInput>
  }

  /**
   * TrabajoImpresion createMany
   */
  export type TrabajoImpresionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrabajoImpresions.
     */
    data: TrabajoImpresionCreateManyInput | TrabajoImpresionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrabajoImpresion createManyAndReturn
   */
  export type TrabajoImpresionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabajoImpresion
     */
    select?: TrabajoImpresionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrabajoImpresion
     */
    omit?: TrabajoImpresionOmit<ExtArgs> | null
    /**
     * The data used to create many TrabajoImpresions.
     */
    data: TrabajoImpresionCreateManyInput | TrabajoImpresionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajoImpresionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrabajoImpresion update
   */
  export type TrabajoImpresionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabajoImpresion
     */
    select?: TrabajoImpresionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabajoImpresion
     */
    omit?: TrabajoImpresionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajoImpresionInclude<ExtArgs> | null
    /**
     * The data needed to update a TrabajoImpresion.
     */
    data: XOR<TrabajoImpresionUpdateInput, TrabajoImpresionUncheckedUpdateInput>
    /**
     * Choose, which TrabajoImpresion to update.
     */
    where: TrabajoImpresionWhereUniqueInput
  }

  /**
   * TrabajoImpresion updateMany
   */
  export type TrabajoImpresionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrabajoImpresions.
     */
    data: XOR<TrabajoImpresionUpdateManyMutationInput, TrabajoImpresionUncheckedUpdateManyInput>
    /**
     * Filter which TrabajoImpresions to update
     */
    where?: TrabajoImpresionWhereInput
    /**
     * Limit how many TrabajoImpresions to update.
     */
    limit?: number
  }

  /**
   * TrabajoImpresion updateManyAndReturn
   */
  export type TrabajoImpresionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabajoImpresion
     */
    select?: TrabajoImpresionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrabajoImpresion
     */
    omit?: TrabajoImpresionOmit<ExtArgs> | null
    /**
     * The data used to update TrabajoImpresions.
     */
    data: XOR<TrabajoImpresionUpdateManyMutationInput, TrabajoImpresionUncheckedUpdateManyInput>
    /**
     * Filter which TrabajoImpresions to update
     */
    where?: TrabajoImpresionWhereInput
    /**
     * Limit how many TrabajoImpresions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajoImpresionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrabajoImpresion upsert
   */
  export type TrabajoImpresionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabajoImpresion
     */
    select?: TrabajoImpresionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabajoImpresion
     */
    omit?: TrabajoImpresionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajoImpresionInclude<ExtArgs> | null
    /**
     * The filter to search for the TrabajoImpresion to update in case it exists.
     */
    where: TrabajoImpresionWhereUniqueInput
    /**
     * In case the TrabajoImpresion found by the `where` argument doesn't exist, create a new TrabajoImpresion with this data.
     */
    create: XOR<TrabajoImpresionCreateInput, TrabajoImpresionUncheckedCreateInput>
    /**
     * In case the TrabajoImpresion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrabajoImpresionUpdateInput, TrabajoImpresionUncheckedUpdateInput>
  }

  /**
   * TrabajoImpresion delete
   */
  export type TrabajoImpresionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabajoImpresion
     */
    select?: TrabajoImpresionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabajoImpresion
     */
    omit?: TrabajoImpresionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajoImpresionInclude<ExtArgs> | null
    /**
     * Filter which TrabajoImpresion to delete.
     */
    where: TrabajoImpresionWhereUniqueInput
  }

  /**
   * TrabajoImpresion deleteMany
   */
  export type TrabajoImpresionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrabajoImpresions to delete
     */
    where?: TrabajoImpresionWhereInput
    /**
     * Limit how many TrabajoImpresions to delete.
     */
    limit?: number
  }

  /**
   * TrabajoImpresion without action
   */
  export type TrabajoImpresionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabajoImpresion
     */
    select?: TrabajoImpresionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrabajoImpresion
     */
    omit?: TrabajoImpresionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrabajoImpresionInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    supabaseUserId: 'supabaseUserId',
    nombre: 'nombre',
    esAdmin: 'esAdmin',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const PermisoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    recurso: 'recurso',
    puedeVer: 'puedeVer',
    puedeCrear: 'puedeCrear',
    puedeEditar: 'puedeEditar',
    puedeEliminar: 'puedeEliminar'
  };

  export type PermisoScalarFieldEnum = (typeof PermisoScalarFieldEnum)[keyof typeof PermisoScalarFieldEnum]


  export const FabricanteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    nombreNormalizado: 'nombreNormalizado',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FabricanteScalarFieldEnum = (typeof FabricanteScalarFieldEnum)[keyof typeof FabricanteScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    nombreNormalizado: 'nombreNormalizado',
    nfpaSalud: 'nfpaSalud',
    nfpaInflamabilidad: 'nfpaInflamabilidad',
    nfpaReactividad: 'nfpaReactividad',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const PlantillaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    archivo: 'archivo',
    activa: 'activa',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlantillaScalarFieldEnum = (typeof PlantillaScalarFieldEnum)[keyof typeof PlantillaScalarFieldEnum]


  export const LoteScalarFieldEnum: {
    id: 'id',
    numeroLote: 'numeroLote',
    fechaFabricacion: 'fechaFabricacion',
    fechaVencimiento: 'fechaVencimiento',
    fechaVencimientoOrden: 'fechaVencimientoOrden',
    coaUrl: 'coaUrl',
    productoId: 'productoId',
    fabricanteId: 'fabricanteId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LoteScalarFieldEnum = (typeof LoteScalarFieldEnum)[keyof typeof LoteScalarFieldEnum]


  export const TrabajoImpresionScalarFieldEnum: {
    id: 'id',
    loteId: 'loteId',
    plantillaId: 'plantillaId',
    pesoBruto: 'pesoBruto',
    unidadBruto: 'unidadBruto',
    cantidadNeta: 'cantidadNeta',
    unidadNeta: 'unidadNeta',
    proforma: 'proforma',
    imagenPath: 'imagenPath',
    estado: 'estado',
    mensajeError: 'mensajeError',
    creadoPorId: 'creadoPorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TrabajoImpresionScalarFieldEnum = (typeof TrabajoImpresionScalarFieldEnum)[keyof typeof TrabajoImpresionScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Recurso'
   */
  export type EnumRecursoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Recurso'>
    


  /**
   * Reference to a field of type 'Recurso[]'
   */
  export type ListEnumRecursoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Recurso[]'>
    


  /**
   * Reference to a field of type 'EstadoTrabajoImpresion'
   */
  export type EnumEstadoTrabajoImpresionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoTrabajoImpresion'>
    


  /**
   * Reference to a field of type 'EstadoTrabajoImpresion[]'
   */
  export type ListEnumEstadoTrabajoImpresionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoTrabajoImpresion[]'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    supabaseUserId?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    esAdmin?: BoolFilter<"Usuario"> | boolean
    avatarUrl?: StringNullableFilter<"Usuario"> | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    permisos?: PermisoListRelationFilter
    trabajosImpresion?: TrabajoImpresionListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    nombre?: SortOrder
    esAdmin?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    permisos?: PermisoOrderByRelationAggregateInput
    trabajosImpresion?: TrabajoImpresionOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    supabaseUserId?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    esAdmin?: BoolFilter<"Usuario"> | boolean
    avatarUrl?: StringNullableFilter<"Usuario"> | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    permisos?: PermisoListRelationFilter
    trabajosImpresion?: TrabajoImpresionListRelationFilter
  }, "id" | "supabaseUserId">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    nombre?: SortOrder
    esAdmin?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    supabaseUserId?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    esAdmin?: BoolWithAggregatesFilter<"Usuario"> | boolean
    avatarUrl?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type PermisoWhereInput = {
    AND?: PermisoWhereInput | PermisoWhereInput[]
    OR?: PermisoWhereInput[]
    NOT?: PermisoWhereInput | PermisoWhereInput[]
    id?: IntFilter<"Permiso"> | number
    usuarioId?: IntFilter<"Permiso"> | number
    recurso?: EnumRecursoFilter<"Permiso"> | $Enums.Recurso
    puedeVer?: BoolFilter<"Permiso"> | boolean
    puedeCrear?: BoolFilter<"Permiso"> | boolean
    puedeEditar?: BoolFilter<"Permiso"> | boolean
    puedeEliminar?: BoolFilter<"Permiso"> | boolean
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type PermisoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    recurso?: SortOrder
    puedeVer?: SortOrder
    puedeCrear?: SortOrder
    puedeEditar?: SortOrder
    puedeEliminar?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type PermisoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId_recurso?: PermisoUsuarioIdRecursoCompoundUniqueInput
    AND?: PermisoWhereInput | PermisoWhereInput[]
    OR?: PermisoWhereInput[]
    NOT?: PermisoWhereInput | PermisoWhereInput[]
    usuarioId?: IntFilter<"Permiso"> | number
    recurso?: EnumRecursoFilter<"Permiso"> | $Enums.Recurso
    puedeVer?: BoolFilter<"Permiso"> | boolean
    puedeCrear?: BoolFilter<"Permiso"> | boolean
    puedeEditar?: BoolFilter<"Permiso"> | boolean
    puedeEliminar?: BoolFilter<"Permiso"> | boolean
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "usuarioId_recurso">

  export type PermisoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    recurso?: SortOrder
    puedeVer?: SortOrder
    puedeCrear?: SortOrder
    puedeEditar?: SortOrder
    puedeEliminar?: SortOrder
    _count?: PermisoCountOrderByAggregateInput
    _avg?: PermisoAvgOrderByAggregateInput
    _max?: PermisoMaxOrderByAggregateInput
    _min?: PermisoMinOrderByAggregateInput
    _sum?: PermisoSumOrderByAggregateInput
  }

  export type PermisoScalarWhereWithAggregatesInput = {
    AND?: PermisoScalarWhereWithAggregatesInput | PermisoScalarWhereWithAggregatesInput[]
    OR?: PermisoScalarWhereWithAggregatesInput[]
    NOT?: PermisoScalarWhereWithAggregatesInput | PermisoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permiso"> | number
    usuarioId?: IntWithAggregatesFilter<"Permiso"> | number
    recurso?: EnumRecursoWithAggregatesFilter<"Permiso"> | $Enums.Recurso
    puedeVer?: BoolWithAggregatesFilter<"Permiso"> | boolean
    puedeCrear?: BoolWithAggregatesFilter<"Permiso"> | boolean
    puedeEditar?: BoolWithAggregatesFilter<"Permiso"> | boolean
    puedeEliminar?: BoolWithAggregatesFilter<"Permiso"> | boolean
  }

  export type FabricanteWhereInput = {
    AND?: FabricanteWhereInput | FabricanteWhereInput[]
    OR?: FabricanteWhereInput[]
    NOT?: FabricanteWhereInput | FabricanteWhereInput[]
    id?: IntFilter<"Fabricante"> | number
    nombre?: StringFilter<"Fabricante"> | string
    nombreNormalizado?: StringFilter<"Fabricante"> | string
    createdAt?: DateTimeFilter<"Fabricante"> | Date | string
    updatedAt?: DateTimeFilter<"Fabricante"> | Date | string
    lotes?: LoteListRelationFilter
  }

  export type FabricanteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    nombreNormalizado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lotes?: LoteOrderByRelationAggregateInput
  }

  export type FabricanteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    nombreNormalizado?: string
    AND?: FabricanteWhereInput | FabricanteWhereInput[]
    OR?: FabricanteWhereInput[]
    NOT?: FabricanteWhereInput | FabricanteWhereInput[]
    createdAt?: DateTimeFilter<"Fabricante"> | Date | string
    updatedAt?: DateTimeFilter<"Fabricante"> | Date | string
    lotes?: LoteListRelationFilter
  }, "id" | "nombre" | "nombreNormalizado">

  export type FabricanteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    nombreNormalizado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FabricanteCountOrderByAggregateInput
    _avg?: FabricanteAvgOrderByAggregateInput
    _max?: FabricanteMaxOrderByAggregateInput
    _min?: FabricanteMinOrderByAggregateInput
    _sum?: FabricanteSumOrderByAggregateInput
  }

  export type FabricanteScalarWhereWithAggregatesInput = {
    AND?: FabricanteScalarWhereWithAggregatesInput | FabricanteScalarWhereWithAggregatesInput[]
    OR?: FabricanteScalarWhereWithAggregatesInput[]
    NOT?: FabricanteScalarWhereWithAggregatesInput | FabricanteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fabricante"> | number
    nombre?: StringWithAggregatesFilter<"Fabricante"> | string
    nombreNormalizado?: StringWithAggregatesFilter<"Fabricante"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Fabricante"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fabricante"> | Date | string
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    nombreNormalizado?: StringFilter<"Producto"> | string
    nfpaSalud?: IntNullableFilter<"Producto"> | number | null
    nfpaInflamabilidad?: IntNullableFilter<"Producto"> | number | null
    nfpaReactividad?: IntNullableFilter<"Producto"> | number | null
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    updatedAt?: DateTimeFilter<"Producto"> | Date | string
    lotes?: LoteListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    nombreNormalizado?: SortOrder
    nfpaSalud?: SortOrderInput | SortOrder
    nfpaInflamabilidad?: SortOrderInput | SortOrder
    nfpaReactividad?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lotes?: LoteOrderByRelationAggregateInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    nombreNormalizado?: string
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    nfpaSalud?: IntNullableFilter<"Producto"> | number | null
    nfpaInflamabilidad?: IntNullableFilter<"Producto"> | number | null
    nfpaReactividad?: IntNullableFilter<"Producto"> | number | null
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    updatedAt?: DateTimeFilter<"Producto"> | Date | string
    lotes?: LoteListRelationFilter
  }, "id" | "nombre" | "nombreNormalizado">

  export type ProductoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    nombreNormalizado?: SortOrder
    nfpaSalud?: SortOrderInput | SortOrder
    nfpaInflamabilidad?: SortOrderInput | SortOrder
    nfpaReactividad?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Producto"> | number
    nombre?: StringWithAggregatesFilter<"Producto"> | string
    nombreNormalizado?: StringWithAggregatesFilter<"Producto"> | string
    nfpaSalud?: IntNullableWithAggregatesFilter<"Producto"> | number | null
    nfpaInflamabilidad?: IntNullableWithAggregatesFilter<"Producto"> | number | null
    nfpaReactividad?: IntNullableWithAggregatesFilter<"Producto"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
  }

  export type PlantillaWhereInput = {
    AND?: PlantillaWhereInput | PlantillaWhereInput[]
    OR?: PlantillaWhereInput[]
    NOT?: PlantillaWhereInput | PlantillaWhereInput[]
    id?: IntFilter<"Plantilla"> | number
    nombre?: StringFilter<"Plantilla"> | string
    archivo?: StringFilter<"Plantilla"> | string
    activa?: BoolFilter<"Plantilla"> | boolean
    createdAt?: DateTimeFilter<"Plantilla"> | Date | string
    updatedAt?: DateTimeFilter<"Plantilla"> | Date | string
    trabajosImpresion?: TrabajoImpresionListRelationFilter
  }

  export type PlantillaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    archivo?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trabajosImpresion?: TrabajoImpresionOrderByRelationAggregateInput
  }

  export type PlantillaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: PlantillaWhereInput | PlantillaWhereInput[]
    OR?: PlantillaWhereInput[]
    NOT?: PlantillaWhereInput | PlantillaWhereInput[]
    archivo?: StringFilter<"Plantilla"> | string
    activa?: BoolFilter<"Plantilla"> | boolean
    createdAt?: DateTimeFilter<"Plantilla"> | Date | string
    updatedAt?: DateTimeFilter<"Plantilla"> | Date | string
    trabajosImpresion?: TrabajoImpresionListRelationFilter
  }, "id" | "nombre">

  export type PlantillaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    archivo?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlantillaCountOrderByAggregateInput
    _avg?: PlantillaAvgOrderByAggregateInput
    _max?: PlantillaMaxOrderByAggregateInput
    _min?: PlantillaMinOrderByAggregateInput
    _sum?: PlantillaSumOrderByAggregateInput
  }

  export type PlantillaScalarWhereWithAggregatesInput = {
    AND?: PlantillaScalarWhereWithAggregatesInput | PlantillaScalarWhereWithAggregatesInput[]
    OR?: PlantillaScalarWhereWithAggregatesInput[]
    NOT?: PlantillaScalarWhereWithAggregatesInput | PlantillaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plantilla"> | number
    nombre?: StringWithAggregatesFilter<"Plantilla"> | string
    archivo?: StringWithAggregatesFilter<"Plantilla"> | string
    activa?: BoolWithAggregatesFilter<"Plantilla"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Plantilla"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Plantilla"> | Date | string
  }

  export type LoteWhereInput = {
    AND?: LoteWhereInput | LoteWhereInput[]
    OR?: LoteWhereInput[]
    NOT?: LoteWhereInput | LoteWhereInput[]
    id?: IntFilter<"Lote"> | number
    numeroLote?: StringFilter<"Lote"> | string
    fechaFabricacion?: StringFilter<"Lote"> | string
    fechaVencimiento?: StringFilter<"Lote"> | string
    fechaVencimientoOrden?: DateTimeNullableFilter<"Lote"> | Date | string | null
    coaUrl?: StringNullableFilter<"Lote"> | string | null
    productoId?: IntFilter<"Lote"> | number
    fabricanteId?: IntFilter<"Lote"> | number
    createdAt?: DateTimeFilter<"Lote"> | Date | string
    updatedAt?: DateTimeFilter<"Lote"> | Date | string
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    fabricante?: XOR<FabricanteScalarRelationFilter, FabricanteWhereInput>
    trabajosImpresion?: TrabajoImpresionListRelationFilter
  }

  export type LoteOrderByWithRelationInput = {
    id?: SortOrder
    numeroLote?: SortOrder
    fechaFabricacion?: SortOrder
    fechaVencimiento?: SortOrder
    fechaVencimientoOrden?: SortOrderInput | SortOrder
    coaUrl?: SortOrderInput | SortOrder
    productoId?: SortOrder
    fabricanteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    producto?: ProductoOrderByWithRelationInput
    fabricante?: FabricanteOrderByWithRelationInput
    trabajosImpresion?: TrabajoImpresionOrderByRelationAggregateInput
  }

  export type LoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productoId_fabricanteId_numeroLote?: LoteProductoIdFabricanteIdNumeroLoteCompoundUniqueInput
    AND?: LoteWhereInput | LoteWhereInput[]
    OR?: LoteWhereInput[]
    NOT?: LoteWhereInput | LoteWhereInput[]
    numeroLote?: StringFilter<"Lote"> | string
    fechaFabricacion?: StringFilter<"Lote"> | string
    fechaVencimiento?: StringFilter<"Lote"> | string
    fechaVencimientoOrden?: DateTimeNullableFilter<"Lote"> | Date | string | null
    coaUrl?: StringNullableFilter<"Lote"> | string | null
    productoId?: IntFilter<"Lote"> | number
    fabricanteId?: IntFilter<"Lote"> | number
    createdAt?: DateTimeFilter<"Lote"> | Date | string
    updatedAt?: DateTimeFilter<"Lote"> | Date | string
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    fabricante?: XOR<FabricanteScalarRelationFilter, FabricanteWhereInput>
    trabajosImpresion?: TrabajoImpresionListRelationFilter
  }, "id" | "productoId_fabricanteId_numeroLote">

  export type LoteOrderByWithAggregationInput = {
    id?: SortOrder
    numeroLote?: SortOrder
    fechaFabricacion?: SortOrder
    fechaVencimiento?: SortOrder
    fechaVencimientoOrden?: SortOrderInput | SortOrder
    coaUrl?: SortOrderInput | SortOrder
    productoId?: SortOrder
    fabricanteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LoteCountOrderByAggregateInput
    _avg?: LoteAvgOrderByAggregateInput
    _max?: LoteMaxOrderByAggregateInput
    _min?: LoteMinOrderByAggregateInput
    _sum?: LoteSumOrderByAggregateInput
  }

  export type LoteScalarWhereWithAggregatesInput = {
    AND?: LoteScalarWhereWithAggregatesInput | LoteScalarWhereWithAggregatesInput[]
    OR?: LoteScalarWhereWithAggregatesInput[]
    NOT?: LoteScalarWhereWithAggregatesInput | LoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lote"> | number
    numeroLote?: StringWithAggregatesFilter<"Lote"> | string
    fechaFabricacion?: StringWithAggregatesFilter<"Lote"> | string
    fechaVencimiento?: StringWithAggregatesFilter<"Lote"> | string
    fechaVencimientoOrden?: DateTimeNullableWithAggregatesFilter<"Lote"> | Date | string | null
    coaUrl?: StringNullableWithAggregatesFilter<"Lote"> | string | null
    productoId?: IntWithAggregatesFilter<"Lote"> | number
    fabricanteId?: IntWithAggregatesFilter<"Lote"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Lote"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lote"> | Date | string
  }

  export type TrabajoImpresionWhereInput = {
    AND?: TrabajoImpresionWhereInput | TrabajoImpresionWhereInput[]
    OR?: TrabajoImpresionWhereInput[]
    NOT?: TrabajoImpresionWhereInput | TrabajoImpresionWhereInput[]
    id?: IntFilter<"TrabajoImpresion"> | number
    loteId?: IntFilter<"TrabajoImpresion"> | number
    plantillaId?: IntFilter<"TrabajoImpresion"> | number
    pesoBruto?: StringFilter<"TrabajoImpresion"> | string
    unidadBruto?: StringFilter<"TrabajoImpresion"> | string
    cantidadNeta?: StringNullableFilter<"TrabajoImpresion"> | string | null
    unidadNeta?: StringFilter<"TrabajoImpresion"> | string
    proforma?: StringFilter<"TrabajoImpresion"> | string
    imagenPath?: StringNullableFilter<"TrabajoImpresion"> | string | null
    estado?: EnumEstadoTrabajoImpresionFilter<"TrabajoImpresion"> | $Enums.EstadoTrabajoImpresion
    mensajeError?: StringNullableFilter<"TrabajoImpresion"> | string | null
    creadoPorId?: IntFilter<"TrabajoImpresion"> | number
    createdAt?: DateTimeFilter<"TrabajoImpresion"> | Date | string
    updatedAt?: DateTimeFilter<"TrabajoImpresion"> | Date | string
    lote?: XOR<LoteScalarRelationFilter, LoteWhereInput>
    plantilla?: XOR<PlantillaScalarRelationFilter, PlantillaWhereInput>
    creadoPor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type TrabajoImpresionOrderByWithRelationInput = {
    id?: SortOrder
    loteId?: SortOrder
    plantillaId?: SortOrder
    pesoBruto?: SortOrder
    unidadBruto?: SortOrder
    cantidadNeta?: SortOrderInput | SortOrder
    unidadNeta?: SortOrder
    proforma?: SortOrder
    imagenPath?: SortOrderInput | SortOrder
    estado?: SortOrder
    mensajeError?: SortOrderInput | SortOrder
    creadoPorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lote?: LoteOrderByWithRelationInput
    plantilla?: PlantillaOrderByWithRelationInput
    creadoPor?: UsuarioOrderByWithRelationInput
  }

  export type TrabajoImpresionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TrabajoImpresionWhereInput | TrabajoImpresionWhereInput[]
    OR?: TrabajoImpresionWhereInput[]
    NOT?: TrabajoImpresionWhereInput | TrabajoImpresionWhereInput[]
    loteId?: IntFilter<"TrabajoImpresion"> | number
    plantillaId?: IntFilter<"TrabajoImpresion"> | number
    pesoBruto?: StringFilter<"TrabajoImpresion"> | string
    unidadBruto?: StringFilter<"TrabajoImpresion"> | string
    cantidadNeta?: StringNullableFilter<"TrabajoImpresion"> | string | null
    unidadNeta?: StringFilter<"TrabajoImpresion"> | string
    proforma?: StringFilter<"TrabajoImpresion"> | string
    imagenPath?: StringNullableFilter<"TrabajoImpresion"> | string | null
    estado?: EnumEstadoTrabajoImpresionFilter<"TrabajoImpresion"> | $Enums.EstadoTrabajoImpresion
    mensajeError?: StringNullableFilter<"TrabajoImpresion"> | string | null
    creadoPorId?: IntFilter<"TrabajoImpresion"> | number
    createdAt?: DateTimeFilter<"TrabajoImpresion"> | Date | string
    updatedAt?: DateTimeFilter<"TrabajoImpresion"> | Date | string
    lote?: XOR<LoteScalarRelationFilter, LoteWhereInput>
    plantilla?: XOR<PlantillaScalarRelationFilter, PlantillaWhereInput>
    creadoPor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type TrabajoImpresionOrderByWithAggregationInput = {
    id?: SortOrder
    loteId?: SortOrder
    plantillaId?: SortOrder
    pesoBruto?: SortOrder
    unidadBruto?: SortOrder
    cantidadNeta?: SortOrderInput | SortOrder
    unidadNeta?: SortOrder
    proforma?: SortOrder
    imagenPath?: SortOrderInput | SortOrder
    estado?: SortOrder
    mensajeError?: SortOrderInput | SortOrder
    creadoPorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TrabajoImpresionCountOrderByAggregateInput
    _avg?: TrabajoImpresionAvgOrderByAggregateInput
    _max?: TrabajoImpresionMaxOrderByAggregateInput
    _min?: TrabajoImpresionMinOrderByAggregateInput
    _sum?: TrabajoImpresionSumOrderByAggregateInput
  }

  export type TrabajoImpresionScalarWhereWithAggregatesInput = {
    AND?: TrabajoImpresionScalarWhereWithAggregatesInput | TrabajoImpresionScalarWhereWithAggregatesInput[]
    OR?: TrabajoImpresionScalarWhereWithAggregatesInput[]
    NOT?: TrabajoImpresionScalarWhereWithAggregatesInput | TrabajoImpresionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrabajoImpresion"> | number
    loteId?: IntWithAggregatesFilter<"TrabajoImpresion"> | number
    plantillaId?: IntWithAggregatesFilter<"TrabajoImpresion"> | number
    pesoBruto?: StringWithAggregatesFilter<"TrabajoImpresion"> | string
    unidadBruto?: StringWithAggregatesFilter<"TrabajoImpresion"> | string
    cantidadNeta?: StringNullableWithAggregatesFilter<"TrabajoImpresion"> | string | null
    unidadNeta?: StringWithAggregatesFilter<"TrabajoImpresion"> | string
    proforma?: StringWithAggregatesFilter<"TrabajoImpresion"> | string
    imagenPath?: StringNullableWithAggregatesFilter<"TrabajoImpresion"> | string | null
    estado?: EnumEstadoTrabajoImpresionWithAggregatesFilter<"TrabajoImpresion"> | $Enums.EstadoTrabajoImpresion
    mensajeError?: StringNullableWithAggregatesFilter<"TrabajoImpresion"> | string | null
    creadoPorId?: IntWithAggregatesFilter<"TrabajoImpresion"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TrabajoImpresion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TrabajoImpresion"> | Date | string
  }

  export type UsuarioCreateInput = {
    supabaseUserId: string
    nombre: string
    esAdmin?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
    permisos?: PermisoCreateNestedManyWithoutUsuarioInput
    trabajosImpresion?: TrabajoImpresionCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    supabaseUserId: string
    nombre: string
    esAdmin?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
    permisos?: PermisoUncheckedCreateNestedManyWithoutUsuarioInput
    trabajosImpresion?: TrabajoImpresionUncheckedCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioUpdateInput = {
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    esAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permisos?: PermisoUpdateManyWithoutUsuarioNestedInput
    trabajosImpresion?: TrabajoImpresionUpdateManyWithoutCreadoPorNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    esAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permisos?: PermisoUncheckedUpdateManyWithoutUsuarioNestedInput
    trabajosImpresion?: TrabajoImpresionUncheckedUpdateManyWithoutCreadoPorNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    supabaseUserId: string
    nombre: string
    esAdmin?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    esAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    esAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermisoCreateInput = {
    recurso: $Enums.Recurso
    puedeVer?: boolean
    puedeCrear?: boolean
    puedeEditar?: boolean
    puedeEliminar?: boolean
    usuario: UsuarioCreateNestedOneWithoutPermisosInput
  }

  export type PermisoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    recurso: $Enums.Recurso
    puedeVer?: boolean
    puedeCrear?: boolean
    puedeEditar?: boolean
    puedeEliminar?: boolean
  }

  export type PermisoUpdateInput = {
    recurso?: EnumRecursoFieldUpdateOperationsInput | $Enums.Recurso
    puedeVer?: BoolFieldUpdateOperationsInput | boolean
    puedeCrear?: BoolFieldUpdateOperationsInput | boolean
    puedeEditar?: BoolFieldUpdateOperationsInput | boolean
    puedeEliminar?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutPermisosNestedInput
  }

  export type PermisoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    recurso?: EnumRecursoFieldUpdateOperationsInput | $Enums.Recurso
    puedeVer?: BoolFieldUpdateOperationsInput | boolean
    puedeCrear?: BoolFieldUpdateOperationsInput | boolean
    puedeEditar?: BoolFieldUpdateOperationsInput | boolean
    puedeEliminar?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PermisoCreateManyInput = {
    id?: number
    usuarioId: number
    recurso: $Enums.Recurso
    puedeVer?: boolean
    puedeCrear?: boolean
    puedeEditar?: boolean
    puedeEliminar?: boolean
  }

  export type PermisoUpdateManyMutationInput = {
    recurso?: EnumRecursoFieldUpdateOperationsInput | $Enums.Recurso
    puedeVer?: BoolFieldUpdateOperationsInput | boolean
    puedeCrear?: BoolFieldUpdateOperationsInput | boolean
    puedeEditar?: BoolFieldUpdateOperationsInput | boolean
    puedeEliminar?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PermisoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    recurso?: EnumRecursoFieldUpdateOperationsInput | $Enums.Recurso
    puedeVer?: BoolFieldUpdateOperationsInput | boolean
    puedeCrear?: BoolFieldUpdateOperationsInput | boolean
    puedeEditar?: BoolFieldUpdateOperationsInput | boolean
    puedeEliminar?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FabricanteCreateInput = {
    nombre: string
    nombreNormalizado: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lotes?: LoteCreateNestedManyWithoutFabricanteInput
  }

  export type FabricanteUncheckedCreateInput = {
    id?: number
    nombre: string
    nombreNormalizado: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lotes?: LoteUncheckedCreateNestedManyWithoutFabricanteInput
  }

  export type FabricanteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nombreNormalizado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lotes?: LoteUpdateManyWithoutFabricanteNestedInput
  }

  export type FabricanteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nombreNormalizado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lotes?: LoteUncheckedUpdateManyWithoutFabricanteNestedInput
  }

  export type FabricanteCreateManyInput = {
    id?: number
    nombre: string
    nombreNormalizado: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FabricanteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nombreNormalizado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FabricanteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nombreNormalizado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoCreateInput = {
    nombre: string
    nombreNormalizado: string
    nfpaSalud?: number | null
    nfpaInflamabilidad?: number | null
    nfpaReactividad?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lotes?: LoteCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    id?: number
    nombre: string
    nombreNormalizado: string
    nfpaSalud?: number | null
    nfpaInflamabilidad?: number | null
    nfpaReactividad?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lotes?: LoteUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nombreNormalizado?: StringFieldUpdateOperationsInput | string
    nfpaSalud?: NullableIntFieldUpdateOperationsInput | number | null
    nfpaInflamabilidad?: NullableIntFieldUpdateOperationsInput | number | null
    nfpaReactividad?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lotes?: LoteUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nombreNormalizado?: StringFieldUpdateOperationsInput | string
    nfpaSalud?: NullableIntFieldUpdateOperationsInput | number | null
    nfpaInflamabilidad?: NullableIntFieldUpdateOperationsInput | number | null
    nfpaReactividad?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lotes?: LoteUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id?: number
    nombre: string
    nombreNormalizado: string
    nfpaSalud?: number | null
    nfpaInflamabilidad?: number | null
    nfpaReactividad?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nombreNormalizado?: StringFieldUpdateOperationsInput | string
    nfpaSalud?: NullableIntFieldUpdateOperationsInput | number | null
    nfpaInflamabilidad?: NullableIntFieldUpdateOperationsInput | number | null
    nfpaReactividad?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nombreNormalizado?: StringFieldUpdateOperationsInput | string
    nfpaSalud?: NullableIntFieldUpdateOperationsInput | number | null
    nfpaInflamabilidad?: NullableIntFieldUpdateOperationsInput | number | null
    nfpaReactividad?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlantillaCreateInput = {
    nombre: string
    archivo: string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trabajosImpresion?: TrabajoImpresionCreateNestedManyWithoutPlantillaInput
  }

  export type PlantillaUncheckedCreateInput = {
    id?: number
    nombre: string
    archivo: string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trabajosImpresion?: TrabajoImpresionUncheckedCreateNestedManyWithoutPlantillaInput
  }

  export type PlantillaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trabajosImpresion?: TrabajoImpresionUpdateManyWithoutPlantillaNestedInput
  }

  export type PlantillaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trabajosImpresion?: TrabajoImpresionUncheckedUpdateManyWithoutPlantillaNestedInput
  }

  export type PlantillaCreateManyInput = {
    id?: number
    nombre: string
    archivo: string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlantillaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlantillaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoteCreateInput = {
    numeroLote: string
    fechaFabricacion: string
    fechaVencimiento: string
    fechaVencimientoOrden?: Date | string | null
    coaUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    producto: ProductoCreateNestedOneWithoutLotesInput
    fabricante: FabricanteCreateNestedOneWithoutLotesInput
    trabajosImpresion?: TrabajoImpresionCreateNestedManyWithoutLoteInput
  }

  export type LoteUncheckedCreateInput = {
    id?: number
    numeroLote: string
    fechaFabricacion: string
    fechaVencimiento: string
    fechaVencimientoOrden?: Date | string | null
    coaUrl?: string | null
    productoId: number
    fabricanteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trabajosImpresion?: TrabajoImpresionUncheckedCreateNestedManyWithoutLoteInput
  }

  export type LoteUpdateInput = {
    numeroLote?: StringFieldUpdateOperationsInput | string
    fechaFabricacion?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: StringFieldUpdateOperationsInput | string
    fechaVencimientoOrden?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: ProductoUpdateOneRequiredWithoutLotesNestedInput
    fabricante?: FabricanteUpdateOneRequiredWithoutLotesNestedInput
    trabajosImpresion?: TrabajoImpresionUpdateManyWithoutLoteNestedInput
  }

  export type LoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroLote?: StringFieldUpdateOperationsInput | string
    fechaFabricacion?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: StringFieldUpdateOperationsInput | string
    fechaVencimientoOrden?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    productoId?: IntFieldUpdateOperationsInput | number
    fabricanteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trabajosImpresion?: TrabajoImpresionUncheckedUpdateManyWithoutLoteNestedInput
  }

  export type LoteCreateManyInput = {
    id?: number
    numeroLote: string
    fechaFabricacion: string
    fechaVencimiento: string
    fechaVencimientoOrden?: Date | string | null
    coaUrl?: string | null
    productoId: number
    fabricanteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoteUpdateManyMutationInput = {
    numeroLote?: StringFieldUpdateOperationsInput | string
    fechaFabricacion?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: StringFieldUpdateOperationsInput | string
    fechaVencimientoOrden?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroLote?: StringFieldUpdateOperationsInput | string
    fechaFabricacion?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: StringFieldUpdateOperationsInput | string
    fechaVencimientoOrden?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    productoId?: IntFieldUpdateOperationsInput | number
    fabricanteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrabajoImpresionCreateInput = {
    pesoBruto: string
    unidadBruto: string
    cantidadNeta?: string | null
    unidadNeta: string
    proforma: string
    imagenPath?: string | null
    estado?: $Enums.EstadoTrabajoImpresion
    mensajeError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lote: LoteCreateNestedOneWithoutTrabajosImpresionInput
    plantilla: PlantillaCreateNestedOneWithoutTrabajosImpresionInput
    creadoPor: UsuarioCreateNestedOneWithoutTrabajosImpresionInput
  }

  export type TrabajoImpresionUncheckedCreateInput = {
    id?: number
    loteId: number
    plantillaId: number
    pesoBruto: string
    unidadBruto: string
    cantidadNeta?: string | null
    unidadNeta: string
    proforma: string
    imagenPath?: string | null
    estado?: $Enums.EstadoTrabajoImpresion
    mensajeError?: string | null
    creadoPorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrabajoImpresionUpdateInput = {
    pesoBruto?: StringFieldUpdateOperationsInput | string
    unidadBruto?: StringFieldUpdateOperationsInput | string
    cantidadNeta?: NullableStringFieldUpdateOperationsInput | string | null
    unidadNeta?: StringFieldUpdateOperationsInput | string
    proforma?: StringFieldUpdateOperationsInput | string
    imagenPath?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTrabajoImpresionFieldUpdateOperationsInput | $Enums.EstadoTrabajoImpresion
    mensajeError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lote?: LoteUpdateOneRequiredWithoutTrabajosImpresionNestedInput
    plantilla?: PlantillaUpdateOneRequiredWithoutTrabajosImpresionNestedInput
    creadoPor?: UsuarioUpdateOneRequiredWithoutTrabajosImpresionNestedInput
  }

  export type TrabajoImpresionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    loteId?: IntFieldUpdateOperationsInput | number
    plantillaId?: IntFieldUpdateOperationsInput | number
    pesoBruto?: StringFieldUpdateOperationsInput | string
    unidadBruto?: StringFieldUpdateOperationsInput | string
    cantidadNeta?: NullableStringFieldUpdateOperationsInput | string | null
    unidadNeta?: StringFieldUpdateOperationsInput | string
    proforma?: StringFieldUpdateOperationsInput | string
    imagenPath?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTrabajoImpresionFieldUpdateOperationsInput | $Enums.EstadoTrabajoImpresion
    mensajeError?: NullableStringFieldUpdateOperationsInput | string | null
    creadoPorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrabajoImpresionCreateManyInput = {
    id?: number
    loteId: number
    plantillaId: number
    pesoBruto: string
    unidadBruto: string
    cantidadNeta?: string | null
    unidadNeta: string
    proforma: string
    imagenPath?: string | null
    estado?: $Enums.EstadoTrabajoImpresion
    mensajeError?: string | null
    creadoPorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrabajoImpresionUpdateManyMutationInput = {
    pesoBruto?: StringFieldUpdateOperationsInput | string
    unidadBruto?: StringFieldUpdateOperationsInput | string
    cantidadNeta?: NullableStringFieldUpdateOperationsInput | string | null
    unidadNeta?: StringFieldUpdateOperationsInput | string
    proforma?: StringFieldUpdateOperationsInput | string
    imagenPath?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTrabajoImpresionFieldUpdateOperationsInput | $Enums.EstadoTrabajoImpresion
    mensajeError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrabajoImpresionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    loteId?: IntFieldUpdateOperationsInput | number
    plantillaId?: IntFieldUpdateOperationsInput | number
    pesoBruto?: StringFieldUpdateOperationsInput | string
    unidadBruto?: StringFieldUpdateOperationsInput | string
    cantidadNeta?: NullableStringFieldUpdateOperationsInput | string | null
    unidadNeta?: StringFieldUpdateOperationsInput | string
    proforma?: StringFieldUpdateOperationsInput | string
    imagenPath?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTrabajoImpresionFieldUpdateOperationsInput | $Enums.EstadoTrabajoImpresion
    mensajeError?: NullableStringFieldUpdateOperationsInput | string | null
    creadoPorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PermisoListRelationFilter = {
    every?: PermisoWhereInput
    some?: PermisoWhereInput
    none?: PermisoWhereInput
  }

  export type TrabajoImpresionListRelationFilter = {
    every?: TrabajoImpresionWhereInput
    some?: TrabajoImpresionWhereInput
    none?: TrabajoImpresionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PermisoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrabajoImpresionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    nombre?: SortOrder
    esAdmin?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    nombre?: SortOrder
    esAdmin?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    nombre?: SortOrder
    esAdmin?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRecursoFilter<$PrismaModel = never> = {
    equals?: $Enums.Recurso | EnumRecursoFieldRefInput<$PrismaModel>
    in?: $Enums.Recurso[] | ListEnumRecursoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Recurso[] | ListEnumRecursoFieldRefInput<$PrismaModel>
    not?: NestedEnumRecursoFilter<$PrismaModel> | $Enums.Recurso
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type PermisoUsuarioIdRecursoCompoundUniqueInput = {
    usuarioId: number
    recurso: $Enums.Recurso
  }

  export type PermisoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    recurso?: SortOrder
    puedeVer?: SortOrder
    puedeCrear?: SortOrder
    puedeEditar?: SortOrder
    puedeEliminar?: SortOrder
  }

  export type PermisoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type PermisoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    recurso?: SortOrder
    puedeVer?: SortOrder
    puedeCrear?: SortOrder
    puedeEditar?: SortOrder
    puedeEliminar?: SortOrder
  }

  export type PermisoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    recurso?: SortOrder
    puedeVer?: SortOrder
    puedeCrear?: SortOrder
    puedeEditar?: SortOrder
    puedeEliminar?: SortOrder
  }

  export type PermisoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnumRecursoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Recurso | EnumRecursoFieldRefInput<$PrismaModel>
    in?: $Enums.Recurso[] | ListEnumRecursoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Recurso[] | ListEnumRecursoFieldRefInput<$PrismaModel>
    not?: NestedEnumRecursoWithAggregatesFilter<$PrismaModel> | $Enums.Recurso
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecursoFilter<$PrismaModel>
    _max?: NestedEnumRecursoFilter<$PrismaModel>
  }

  export type LoteListRelationFilter = {
    every?: LoteWhereInput
    some?: LoteWhereInput
    none?: LoteWhereInput
  }

  export type LoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FabricanteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    nombreNormalizado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FabricanteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FabricanteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    nombreNormalizado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FabricanteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    nombreNormalizado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FabricanteSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ProductoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    nombreNormalizado?: SortOrder
    nfpaSalud?: SortOrder
    nfpaInflamabilidad?: SortOrder
    nfpaReactividad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    id?: SortOrder
    nfpaSalud?: SortOrder
    nfpaInflamabilidad?: SortOrder
    nfpaReactividad?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    nombreNormalizado?: SortOrder
    nfpaSalud?: SortOrder
    nfpaInflamabilidad?: SortOrder
    nfpaReactividad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    nombreNormalizado?: SortOrder
    nfpaSalud?: SortOrder
    nfpaInflamabilidad?: SortOrder
    nfpaReactividad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    id?: SortOrder
    nfpaSalud?: SortOrder
    nfpaInflamabilidad?: SortOrder
    nfpaReactividad?: SortOrder
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

  export type PlantillaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    archivo?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlantillaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlantillaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    archivo?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlantillaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    archivo?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlantillaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type FabricanteScalarRelationFilter = {
    is?: FabricanteWhereInput
    isNot?: FabricanteWhereInput
  }

  export type LoteProductoIdFabricanteIdNumeroLoteCompoundUniqueInput = {
    productoId: number
    fabricanteId: number
    numeroLote: string
  }

  export type LoteCountOrderByAggregateInput = {
    id?: SortOrder
    numeroLote?: SortOrder
    fechaFabricacion?: SortOrder
    fechaVencimiento?: SortOrder
    fechaVencimientoOrden?: SortOrder
    coaUrl?: SortOrder
    productoId?: SortOrder
    fabricanteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoteAvgOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    fabricanteId?: SortOrder
  }

  export type LoteMaxOrderByAggregateInput = {
    id?: SortOrder
    numeroLote?: SortOrder
    fechaFabricacion?: SortOrder
    fechaVencimiento?: SortOrder
    fechaVencimientoOrden?: SortOrder
    coaUrl?: SortOrder
    productoId?: SortOrder
    fabricanteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoteMinOrderByAggregateInput = {
    id?: SortOrder
    numeroLote?: SortOrder
    fechaFabricacion?: SortOrder
    fechaVencimiento?: SortOrder
    fechaVencimientoOrden?: SortOrder
    coaUrl?: SortOrder
    productoId?: SortOrder
    fabricanteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoteSumOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    fabricanteId?: SortOrder
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

  export type EnumEstadoTrabajoImpresionFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTrabajoImpresion | EnumEstadoTrabajoImpresionFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTrabajoImpresion[] | ListEnumEstadoTrabajoImpresionFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoTrabajoImpresion[] | ListEnumEstadoTrabajoImpresionFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoTrabajoImpresionFilter<$PrismaModel> | $Enums.EstadoTrabajoImpresion
  }

  export type LoteScalarRelationFilter = {
    is?: LoteWhereInput
    isNot?: LoteWhereInput
  }

  export type PlantillaScalarRelationFilter = {
    is?: PlantillaWhereInput
    isNot?: PlantillaWhereInput
  }

  export type TrabajoImpresionCountOrderByAggregateInput = {
    id?: SortOrder
    loteId?: SortOrder
    plantillaId?: SortOrder
    pesoBruto?: SortOrder
    unidadBruto?: SortOrder
    cantidadNeta?: SortOrder
    unidadNeta?: SortOrder
    proforma?: SortOrder
    imagenPath?: SortOrder
    estado?: SortOrder
    mensajeError?: SortOrder
    creadoPorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrabajoImpresionAvgOrderByAggregateInput = {
    id?: SortOrder
    loteId?: SortOrder
    plantillaId?: SortOrder
    creadoPorId?: SortOrder
  }

  export type TrabajoImpresionMaxOrderByAggregateInput = {
    id?: SortOrder
    loteId?: SortOrder
    plantillaId?: SortOrder
    pesoBruto?: SortOrder
    unidadBruto?: SortOrder
    cantidadNeta?: SortOrder
    unidadNeta?: SortOrder
    proforma?: SortOrder
    imagenPath?: SortOrder
    estado?: SortOrder
    mensajeError?: SortOrder
    creadoPorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrabajoImpresionMinOrderByAggregateInput = {
    id?: SortOrder
    loteId?: SortOrder
    plantillaId?: SortOrder
    pesoBruto?: SortOrder
    unidadBruto?: SortOrder
    cantidadNeta?: SortOrder
    unidadNeta?: SortOrder
    proforma?: SortOrder
    imagenPath?: SortOrder
    estado?: SortOrder
    mensajeError?: SortOrder
    creadoPorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrabajoImpresionSumOrderByAggregateInput = {
    id?: SortOrder
    loteId?: SortOrder
    plantillaId?: SortOrder
    creadoPorId?: SortOrder
  }

  export type EnumEstadoTrabajoImpresionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTrabajoImpresion | EnumEstadoTrabajoImpresionFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTrabajoImpresion[] | ListEnumEstadoTrabajoImpresionFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoTrabajoImpresion[] | ListEnumEstadoTrabajoImpresionFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoTrabajoImpresionWithAggregatesFilter<$PrismaModel> | $Enums.EstadoTrabajoImpresion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoTrabajoImpresionFilter<$PrismaModel>
    _max?: NestedEnumEstadoTrabajoImpresionFilter<$PrismaModel>
  }

  export type PermisoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PermisoCreateWithoutUsuarioInput, PermisoUncheckedCreateWithoutUsuarioInput> | PermisoCreateWithoutUsuarioInput[] | PermisoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PermisoCreateOrConnectWithoutUsuarioInput | PermisoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PermisoCreateManyUsuarioInputEnvelope
    connect?: PermisoWhereUniqueInput | PermisoWhereUniqueInput[]
  }

  export type TrabajoImpresionCreateNestedManyWithoutCreadoPorInput = {
    create?: XOR<TrabajoImpresionCreateWithoutCreadoPorInput, TrabajoImpresionUncheckedCreateWithoutCreadoPorInput> | TrabajoImpresionCreateWithoutCreadoPorInput[] | TrabajoImpresionUncheckedCreateWithoutCreadoPorInput[]
    connectOrCreate?: TrabajoImpresionCreateOrConnectWithoutCreadoPorInput | TrabajoImpresionCreateOrConnectWithoutCreadoPorInput[]
    createMany?: TrabajoImpresionCreateManyCreadoPorInputEnvelope
    connect?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
  }

  export type PermisoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PermisoCreateWithoutUsuarioInput, PermisoUncheckedCreateWithoutUsuarioInput> | PermisoCreateWithoutUsuarioInput[] | PermisoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PermisoCreateOrConnectWithoutUsuarioInput | PermisoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PermisoCreateManyUsuarioInputEnvelope
    connect?: PermisoWhereUniqueInput | PermisoWhereUniqueInput[]
  }

  export type TrabajoImpresionUncheckedCreateNestedManyWithoutCreadoPorInput = {
    create?: XOR<TrabajoImpresionCreateWithoutCreadoPorInput, TrabajoImpresionUncheckedCreateWithoutCreadoPorInput> | TrabajoImpresionCreateWithoutCreadoPorInput[] | TrabajoImpresionUncheckedCreateWithoutCreadoPorInput[]
    connectOrCreate?: TrabajoImpresionCreateOrConnectWithoutCreadoPorInput | TrabajoImpresionCreateOrConnectWithoutCreadoPorInput[]
    createMany?: TrabajoImpresionCreateManyCreadoPorInputEnvelope
    connect?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PermisoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PermisoCreateWithoutUsuarioInput, PermisoUncheckedCreateWithoutUsuarioInput> | PermisoCreateWithoutUsuarioInput[] | PermisoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PermisoCreateOrConnectWithoutUsuarioInput | PermisoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PermisoUpsertWithWhereUniqueWithoutUsuarioInput | PermisoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PermisoCreateManyUsuarioInputEnvelope
    set?: PermisoWhereUniqueInput | PermisoWhereUniqueInput[]
    disconnect?: PermisoWhereUniqueInput | PermisoWhereUniqueInput[]
    delete?: PermisoWhereUniqueInput | PermisoWhereUniqueInput[]
    connect?: PermisoWhereUniqueInput | PermisoWhereUniqueInput[]
    update?: PermisoUpdateWithWhereUniqueWithoutUsuarioInput | PermisoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PermisoUpdateManyWithWhereWithoutUsuarioInput | PermisoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PermisoScalarWhereInput | PermisoScalarWhereInput[]
  }

  export type TrabajoImpresionUpdateManyWithoutCreadoPorNestedInput = {
    create?: XOR<TrabajoImpresionCreateWithoutCreadoPorInput, TrabajoImpresionUncheckedCreateWithoutCreadoPorInput> | TrabajoImpresionCreateWithoutCreadoPorInput[] | TrabajoImpresionUncheckedCreateWithoutCreadoPorInput[]
    connectOrCreate?: TrabajoImpresionCreateOrConnectWithoutCreadoPorInput | TrabajoImpresionCreateOrConnectWithoutCreadoPorInput[]
    upsert?: TrabajoImpresionUpsertWithWhereUniqueWithoutCreadoPorInput | TrabajoImpresionUpsertWithWhereUniqueWithoutCreadoPorInput[]
    createMany?: TrabajoImpresionCreateManyCreadoPorInputEnvelope
    set?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    disconnect?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    delete?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    connect?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    update?: TrabajoImpresionUpdateWithWhereUniqueWithoutCreadoPorInput | TrabajoImpresionUpdateWithWhereUniqueWithoutCreadoPorInput[]
    updateMany?: TrabajoImpresionUpdateManyWithWhereWithoutCreadoPorInput | TrabajoImpresionUpdateManyWithWhereWithoutCreadoPorInput[]
    deleteMany?: TrabajoImpresionScalarWhereInput | TrabajoImpresionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PermisoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PermisoCreateWithoutUsuarioInput, PermisoUncheckedCreateWithoutUsuarioInput> | PermisoCreateWithoutUsuarioInput[] | PermisoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PermisoCreateOrConnectWithoutUsuarioInput | PermisoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PermisoUpsertWithWhereUniqueWithoutUsuarioInput | PermisoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PermisoCreateManyUsuarioInputEnvelope
    set?: PermisoWhereUniqueInput | PermisoWhereUniqueInput[]
    disconnect?: PermisoWhereUniqueInput | PermisoWhereUniqueInput[]
    delete?: PermisoWhereUniqueInput | PermisoWhereUniqueInput[]
    connect?: PermisoWhereUniqueInput | PermisoWhereUniqueInput[]
    update?: PermisoUpdateWithWhereUniqueWithoutUsuarioInput | PermisoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PermisoUpdateManyWithWhereWithoutUsuarioInput | PermisoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PermisoScalarWhereInput | PermisoScalarWhereInput[]
  }

  export type TrabajoImpresionUncheckedUpdateManyWithoutCreadoPorNestedInput = {
    create?: XOR<TrabajoImpresionCreateWithoutCreadoPorInput, TrabajoImpresionUncheckedCreateWithoutCreadoPorInput> | TrabajoImpresionCreateWithoutCreadoPorInput[] | TrabajoImpresionUncheckedCreateWithoutCreadoPorInput[]
    connectOrCreate?: TrabajoImpresionCreateOrConnectWithoutCreadoPorInput | TrabajoImpresionCreateOrConnectWithoutCreadoPorInput[]
    upsert?: TrabajoImpresionUpsertWithWhereUniqueWithoutCreadoPorInput | TrabajoImpresionUpsertWithWhereUniqueWithoutCreadoPorInput[]
    createMany?: TrabajoImpresionCreateManyCreadoPorInputEnvelope
    set?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    disconnect?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    delete?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    connect?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    update?: TrabajoImpresionUpdateWithWhereUniqueWithoutCreadoPorInput | TrabajoImpresionUpdateWithWhereUniqueWithoutCreadoPorInput[]
    updateMany?: TrabajoImpresionUpdateManyWithWhereWithoutCreadoPorInput | TrabajoImpresionUpdateManyWithWhereWithoutCreadoPorInput[]
    deleteMany?: TrabajoImpresionScalarWhereInput | TrabajoImpresionScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutPermisosInput = {
    create?: XOR<UsuarioCreateWithoutPermisosInput, UsuarioUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPermisosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumRecursoFieldUpdateOperationsInput = {
    set?: $Enums.Recurso
  }

  export type UsuarioUpdateOneRequiredWithoutPermisosNestedInput = {
    create?: XOR<UsuarioCreateWithoutPermisosInput, UsuarioUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPermisosInput
    upsert?: UsuarioUpsertWithoutPermisosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPermisosInput, UsuarioUpdateWithoutPermisosInput>, UsuarioUncheckedUpdateWithoutPermisosInput>
  }

  export type LoteCreateNestedManyWithoutFabricanteInput = {
    create?: XOR<LoteCreateWithoutFabricanteInput, LoteUncheckedCreateWithoutFabricanteInput> | LoteCreateWithoutFabricanteInput[] | LoteUncheckedCreateWithoutFabricanteInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutFabricanteInput | LoteCreateOrConnectWithoutFabricanteInput[]
    createMany?: LoteCreateManyFabricanteInputEnvelope
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
  }

  export type LoteUncheckedCreateNestedManyWithoutFabricanteInput = {
    create?: XOR<LoteCreateWithoutFabricanteInput, LoteUncheckedCreateWithoutFabricanteInput> | LoteCreateWithoutFabricanteInput[] | LoteUncheckedCreateWithoutFabricanteInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutFabricanteInput | LoteCreateOrConnectWithoutFabricanteInput[]
    createMany?: LoteCreateManyFabricanteInputEnvelope
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
  }

  export type LoteUpdateManyWithoutFabricanteNestedInput = {
    create?: XOR<LoteCreateWithoutFabricanteInput, LoteUncheckedCreateWithoutFabricanteInput> | LoteCreateWithoutFabricanteInput[] | LoteUncheckedCreateWithoutFabricanteInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutFabricanteInput | LoteCreateOrConnectWithoutFabricanteInput[]
    upsert?: LoteUpsertWithWhereUniqueWithoutFabricanteInput | LoteUpsertWithWhereUniqueWithoutFabricanteInput[]
    createMany?: LoteCreateManyFabricanteInputEnvelope
    set?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    disconnect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    delete?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    update?: LoteUpdateWithWhereUniqueWithoutFabricanteInput | LoteUpdateWithWhereUniqueWithoutFabricanteInput[]
    updateMany?: LoteUpdateManyWithWhereWithoutFabricanteInput | LoteUpdateManyWithWhereWithoutFabricanteInput[]
    deleteMany?: LoteScalarWhereInput | LoteScalarWhereInput[]
  }

  export type LoteUncheckedUpdateManyWithoutFabricanteNestedInput = {
    create?: XOR<LoteCreateWithoutFabricanteInput, LoteUncheckedCreateWithoutFabricanteInput> | LoteCreateWithoutFabricanteInput[] | LoteUncheckedCreateWithoutFabricanteInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutFabricanteInput | LoteCreateOrConnectWithoutFabricanteInput[]
    upsert?: LoteUpsertWithWhereUniqueWithoutFabricanteInput | LoteUpsertWithWhereUniqueWithoutFabricanteInput[]
    createMany?: LoteCreateManyFabricanteInputEnvelope
    set?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    disconnect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    delete?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    update?: LoteUpdateWithWhereUniqueWithoutFabricanteInput | LoteUpdateWithWhereUniqueWithoutFabricanteInput[]
    updateMany?: LoteUpdateManyWithWhereWithoutFabricanteInput | LoteUpdateManyWithWhereWithoutFabricanteInput[]
    deleteMany?: LoteScalarWhereInput | LoteScalarWhereInput[]
  }

  export type LoteCreateNestedManyWithoutProductoInput = {
    create?: XOR<LoteCreateWithoutProductoInput, LoteUncheckedCreateWithoutProductoInput> | LoteCreateWithoutProductoInput[] | LoteUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutProductoInput | LoteCreateOrConnectWithoutProductoInput[]
    createMany?: LoteCreateManyProductoInputEnvelope
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
  }

  export type LoteUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<LoteCreateWithoutProductoInput, LoteUncheckedCreateWithoutProductoInput> | LoteCreateWithoutProductoInput[] | LoteUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutProductoInput | LoteCreateOrConnectWithoutProductoInput[]
    createMany?: LoteCreateManyProductoInputEnvelope
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LoteUpdateManyWithoutProductoNestedInput = {
    create?: XOR<LoteCreateWithoutProductoInput, LoteUncheckedCreateWithoutProductoInput> | LoteCreateWithoutProductoInput[] | LoteUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutProductoInput | LoteCreateOrConnectWithoutProductoInput[]
    upsert?: LoteUpsertWithWhereUniqueWithoutProductoInput | LoteUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: LoteCreateManyProductoInputEnvelope
    set?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    disconnect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    delete?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    update?: LoteUpdateWithWhereUniqueWithoutProductoInput | LoteUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: LoteUpdateManyWithWhereWithoutProductoInput | LoteUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: LoteScalarWhereInput | LoteScalarWhereInput[]
  }

  export type LoteUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<LoteCreateWithoutProductoInput, LoteUncheckedCreateWithoutProductoInput> | LoteCreateWithoutProductoInput[] | LoteUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: LoteCreateOrConnectWithoutProductoInput | LoteCreateOrConnectWithoutProductoInput[]
    upsert?: LoteUpsertWithWhereUniqueWithoutProductoInput | LoteUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: LoteCreateManyProductoInputEnvelope
    set?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    disconnect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    delete?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    connect?: LoteWhereUniqueInput | LoteWhereUniqueInput[]
    update?: LoteUpdateWithWhereUniqueWithoutProductoInput | LoteUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: LoteUpdateManyWithWhereWithoutProductoInput | LoteUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: LoteScalarWhereInput | LoteScalarWhereInput[]
  }

  export type TrabajoImpresionCreateNestedManyWithoutPlantillaInput = {
    create?: XOR<TrabajoImpresionCreateWithoutPlantillaInput, TrabajoImpresionUncheckedCreateWithoutPlantillaInput> | TrabajoImpresionCreateWithoutPlantillaInput[] | TrabajoImpresionUncheckedCreateWithoutPlantillaInput[]
    connectOrCreate?: TrabajoImpresionCreateOrConnectWithoutPlantillaInput | TrabajoImpresionCreateOrConnectWithoutPlantillaInput[]
    createMany?: TrabajoImpresionCreateManyPlantillaInputEnvelope
    connect?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
  }

  export type TrabajoImpresionUncheckedCreateNestedManyWithoutPlantillaInput = {
    create?: XOR<TrabajoImpresionCreateWithoutPlantillaInput, TrabajoImpresionUncheckedCreateWithoutPlantillaInput> | TrabajoImpresionCreateWithoutPlantillaInput[] | TrabajoImpresionUncheckedCreateWithoutPlantillaInput[]
    connectOrCreate?: TrabajoImpresionCreateOrConnectWithoutPlantillaInput | TrabajoImpresionCreateOrConnectWithoutPlantillaInput[]
    createMany?: TrabajoImpresionCreateManyPlantillaInputEnvelope
    connect?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
  }

  export type TrabajoImpresionUpdateManyWithoutPlantillaNestedInput = {
    create?: XOR<TrabajoImpresionCreateWithoutPlantillaInput, TrabajoImpresionUncheckedCreateWithoutPlantillaInput> | TrabajoImpresionCreateWithoutPlantillaInput[] | TrabajoImpresionUncheckedCreateWithoutPlantillaInput[]
    connectOrCreate?: TrabajoImpresionCreateOrConnectWithoutPlantillaInput | TrabajoImpresionCreateOrConnectWithoutPlantillaInput[]
    upsert?: TrabajoImpresionUpsertWithWhereUniqueWithoutPlantillaInput | TrabajoImpresionUpsertWithWhereUniqueWithoutPlantillaInput[]
    createMany?: TrabajoImpresionCreateManyPlantillaInputEnvelope
    set?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    disconnect?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    delete?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    connect?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    update?: TrabajoImpresionUpdateWithWhereUniqueWithoutPlantillaInput | TrabajoImpresionUpdateWithWhereUniqueWithoutPlantillaInput[]
    updateMany?: TrabajoImpresionUpdateManyWithWhereWithoutPlantillaInput | TrabajoImpresionUpdateManyWithWhereWithoutPlantillaInput[]
    deleteMany?: TrabajoImpresionScalarWhereInput | TrabajoImpresionScalarWhereInput[]
  }

  export type TrabajoImpresionUncheckedUpdateManyWithoutPlantillaNestedInput = {
    create?: XOR<TrabajoImpresionCreateWithoutPlantillaInput, TrabajoImpresionUncheckedCreateWithoutPlantillaInput> | TrabajoImpresionCreateWithoutPlantillaInput[] | TrabajoImpresionUncheckedCreateWithoutPlantillaInput[]
    connectOrCreate?: TrabajoImpresionCreateOrConnectWithoutPlantillaInput | TrabajoImpresionCreateOrConnectWithoutPlantillaInput[]
    upsert?: TrabajoImpresionUpsertWithWhereUniqueWithoutPlantillaInput | TrabajoImpresionUpsertWithWhereUniqueWithoutPlantillaInput[]
    createMany?: TrabajoImpresionCreateManyPlantillaInputEnvelope
    set?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    disconnect?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    delete?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    connect?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    update?: TrabajoImpresionUpdateWithWhereUniqueWithoutPlantillaInput | TrabajoImpresionUpdateWithWhereUniqueWithoutPlantillaInput[]
    updateMany?: TrabajoImpresionUpdateManyWithWhereWithoutPlantillaInput | TrabajoImpresionUpdateManyWithWhereWithoutPlantillaInput[]
    deleteMany?: TrabajoImpresionScalarWhereInput | TrabajoImpresionScalarWhereInput[]
  }

  export type ProductoCreateNestedOneWithoutLotesInput = {
    create?: XOR<ProductoCreateWithoutLotesInput, ProductoUncheckedCreateWithoutLotesInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutLotesInput
    connect?: ProductoWhereUniqueInput
  }

  export type FabricanteCreateNestedOneWithoutLotesInput = {
    create?: XOR<FabricanteCreateWithoutLotesInput, FabricanteUncheckedCreateWithoutLotesInput>
    connectOrCreate?: FabricanteCreateOrConnectWithoutLotesInput
    connect?: FabricanteWhereUniqueInput
  }

  export type TrabajoImpresionCreateNestedManyWithoutLoteInput = {
    create?: XOR<TrabajoImpresionCreateWithoutLoteInput, TrabajoImpresionUncheckedCreateWithoutLoteInput> | TrabajoImpresionCreateWithoutLoteInput[] | TrabajoImpresionUncheckedCreateWithoutLoteInput[]
    connectOrCreate?: TrabajoImpresionCreateOrConnectWithoutLoteInput | TrabajoImpresionCreateOrConnectWithoutLoteInput[]
    createMany?: TrabajoImpresionCreateManyLoteInputEnvelope
    connect?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
  }

  export type TrabajoImpresionUncheckedCreateNestedManyWithoutLoteInput = {
    create?: XOR<TrabajoImpresionCreateWithoutLoteInput, TrabajoImpresionUncheckedCreateWithoutLoteInput> | TrabajoImpresionCreateWithoutLoteInput[] | TrabajoImpresionUncheckedCreateWithoutLoteInput[]
    connectOrCreate?: TrabajoImpresionCreateOrConnectWithoutLoteInput | TrabajoImpresionCreateOrConnectWithoutLoteInput[]
    createMany?: TrabajoImpresionCreateManyLoteInputEnvelope
    connect?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProductoUpdateOneRequiredWithoutLotesNestedInput = {
    create?: XOR<ProductoCreateWithoutLotesInput, ProductoUncheckedCreateWithoutLotesInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutLotesInput
    upsert?: ProductoUpsertWithoutLotesInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutLotesInput, ProductoUpdateWithoutLotesInput>, ProductoUncheckedUpdateWithoutLotesInput>
  }

  export type FabricanteUpdateOneRequiredWithoutLotesNestedInput = {
    create?: XOR<FabricanteCreateWithoutLotesInput, FabricanteUncheckedCreateWithoutLotesInput>
    connectOrCreate?: FabricanteCreateOrConnectWithoutLotesInput
    upsert?: FabricanteUpsertWithoutLotesInput
    connect?: FabricanteWhereUniqueInput
    update?: XOR<XOR<FabricanteUpdateToOneWithWhereWithoutLotesInput, FabricanteUpdateWithoutLotesInput>, FabricanteUncheckedUpdateWithoutLotesInput>
  }

  export type TrabajoImpresionUpdateManyWithoutLoteNestedInput = {
    create?: XOR<TrabajoImpresionCreateWithoutLoteInput, TrabajoImpresionUncheckedCreateWithoutLoteInput> | TrabajoImpresionCreateWithoutLoteInput[] | TrabajoImpresionUncheckedCreateWithoutLoteInput[]
    connectOrCreate?: TrabajoImpresionCreateOrConnectWithoutLoteInput | TrabajoImpresionCreateOrConnectWithoutLoteInput[]
    upsert?: TrabajoImpresionUpsertWithWhereUniqueWithoutLoteInput | TrabajoImpresionUpsertWithWhereUniqueWithoutLoteInput[]
    createMany?: TrabajoImpresionCreateManyLoteInputEnvelope
    set?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    disconnect?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    delete?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    connect?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    update?: TrabajoImpresionUpdateWithWhereUniqueWithoutLoteInput | TrabajoImpresionUpdateWithWhereUniqueWithoutLoteInput[]
    updateMany?: TrabajoImpresionUpdateManyWithWhereWithoutLoteInput | TrabajoImpresionUpdateManyWithWhereWithoutLoteInput[]
    deleteMany?: TrabajoImpresionScalarWhereInput | TrabajoImpresionScalarWhereInput[]
  }

  export type TrabajoImpresionUncheckedUpdateManyWithoutLoteNestedInput = {
    create?: XOR<TrabajoImpresionCreateWithoutLoteInput, TrabajoImpresionUncheckedCreateWithoutLoteInput> | TrabajoImpresionCreateWithoutLoteInput[] | TrabajoImpresionUncheckedCreateWithoutLoteInput[]
    connectOrCreate?: TrabajoImpresionCreateOrConnectWithoutLoteInput | TrabajoImpresionCreateOrConnectWithoutLoteInput[]
    upsert?: TrabajoImpresionUpsertWithWhereUniqueWithoutLoteInput | TrabajoImpresionUpsertWithWhereUniqueWithoutLoteInput[]
    createMany?: TrabajoImpresionCreateManyLoteInputEnvelope
    set?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    disconnect?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    delete?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    connect?: TrabajoImpresionWhereUniqueInput | TrabajoImpresionWhereUniqueInput[]
    update?: TrabajoImpresionUpdateWithWhereUniqueWithoutLoteInput | TrabajoImpresionUpdateWithWhereUniqueWithoutLoteInput[]
    updateMany?: TrabajoImpresionUpdateManyWithWhereWithoutLoteInput | TrabajoImpresionUpdateManyWithWhereWithoutLoteInput[]
    deleteMany?: TrabajoImpresionScalarWhereInput | TrabajoImpresionScalarWhereInput[]
  }

  export type LoteCreateNestedOneWithoutTrabajosImpresionInput = {
    create?: XOR<LoteCreateWithoutTrabajosImpresionInput, LoteUncheckedCreateWithoutTrabajosImpresionInput>
    connectOrCreate?: LoteCreateOrConnectWithoutTrabajosImpresionInput
    connect?: LoteWhereUniqueInput
  }

  export type PlantillaCreateNestedOneWithoutTrabajosImpresionInput = {
    create?: XOR<PlantillaCreateWithoutTrabajosImpresionInput, PlantillaUncheckedCreateWithoutTrabajosImpresionInput>
    connectOrCreate?: PlantillaCreateOrConnectWithoutTrabajosImpresionInput
    connect?: PlantillaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutTrabajosImpresionInput = {
    create?: XOR<UsuarioCreateWithoutTrabajosImpresionInput, UsuarioUncheckedCreateWithoutTrabajosImpresionInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTrabajosImpresionInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumEstadoTrabajoImpresionFieldUpdateOperationsInput = {
    set?: $Enums.EstadoTrabajoImpresion
  }

  export type LoteUpdateOneRequiredWithoutTrabajosImpresionNestedInput = {
    create?: XOR<LoteCreateWithoutTrabajosImpresionInput, LoteUncheckedCreateWithoutTrabajosImpresionInput>
    connectOrCreate?: LoteCreateOrConnectWithoutTrabajosImpresionInput
    upsert?: LoteUpsertWithoutTrabajosImpresionInput
    connect?: LoteWhereUniqueInput
    update?: XOR<XOR<LoteUpdateToOneWithWhereWithoutTrabajosImpresionInput, LoteUpdateWithoutTrabajosImpresionInput>, LoteUncheckedUpdateWithoutTrabajosImpresionInput>
  }

  export type PlantillaUpdateOneRequiredWithoutTrabajosImpresionNestedInput = {
    create?: XOR<PlantillaCreateWithoutTrabajosImpresionInput, PlantillaUncheckedCreateWithoutTrabajosImpresionInput>
    connectOrCreate?: PlantillaCreateOrConnectWithoutTrabajosImpresionInput
    upsert?: PlantillaUpsertWithoutTrabajosImpresionInput
    connect?: PlantillaWhereUniqueInput
    update?: XOR<XOR<PlantillaUpdateToOneWithWhereWithoutTrabajosImpresionInput, PlantillaUpdateWithoutTrabajosImpresionInput>, PlantillaUncheckedUpdateWithoutTrabajosImpresionInput>
  }

  export type UsuarioUpdateOneRequiredWithoutTrabajosImpresionNestedInput = {
    create?: XOR<UsuarioCreateWithoutTrabajosImpresionInput, UsuarioUncheckedCreateWithoutTrabajosImpresionInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTrabajosImpresionInput
    upsert?: UsuarioUpsertWithoutTrabajosImpresionInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTrabajosImpresionInput, UsuarioUpdateWithoutTrabajosImpresionInput>, UsuarioUncheckedUpdateWithoutTrabajosImpresionInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRecursoFilter<$PrismaModel = never> = {
    equals?: $Enums.Recurso | EnumRecursoFieldRefInput<$PrismaModel>
    in?: $Enums.Recurso[] | ListEnumRecursoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Recurso[] | ListEnumRecursoFieldRefInput<$PrismaModel>
    not?: NestedEnumRecursoFilter<$PrismaModel> | $Enums.Recurso
  }

  export type NestedEnumRecursoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Recurso | EnumRecursoFieldRefInput<$PrismaModel>
    in?: $Enums.Recurso[] | ListEnumRecursoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Recurso[] | ListEnumRecursoFieldRefInput<$PrismaModel>
    not?: NestedEnumRecursoWithAggregatesFilter<$PrismaModel> | $Enums.Recurso
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecursoFilter<$PrismaModel>
    _max?: NestedEnumRecursoFilter<$PrismaModel>
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

  export type NestedEnumEstadoTrabajoImpresionFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTrabajoImpresion | EnumEstadoTrabajoImpresionFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTrabajoImpresion[] | ListEnumEstadoTrabajoImpresionFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoTrabajoImpresion[] | ListEnumEstadoTrabajoImpresionFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoTrabajoImpresionFilter<$PrismaModel> | $Enums.EstadoTrabajoImpresion
  }

  export type NestedEnumEstadoTrabajoImpresionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTrabajoImpresion | EnumEstadoTrabajoImpresionFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTrabajoImpresion[] | ListEnumEstadoTrabajoImpresionFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoTrabajoImpresion[] | ListEnumEstadoTrabajoImpresionFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoTrabajoImpresionWithAggregatesFilter<$PrismaModel> | $Enums.EstadoTrabajoImpresion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoTrabajoImpresionFilter<$PrismaModel>
    _max?: NestedEnumEstadoTrabajoImpresionFilter<$PrismaModel>
  }

  export type PermisoCreateWithoutUsuarioInput = {
    recurso: $Enums.Recurso
    puedeVer?: boolean
    puedeCrear?: boolean
    puedeEditar?: boolean
    puedeEliminar?: boolean
  }

  export type PermisoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    recurso: $Enums.Recurso
    puedeVer?: boolean
    puedeCrear?: boolean
    puedeEditar?: boolean
    puedeEliminar?: boolean
  }

  export type PermisoCreateOrConnectWithoutUsuarioInput = {
    where: PermisoWhereUniqueInput
    create: XOR<PermisoCreateWithoutUsuarioInput, PermisoUncheckedCreateWithoutUsuarioInput>
  }

  export type PermisoCreateManyUsuarioInputEnvelope = {
    data: PermisoCreateManyUsuarioInput | PermisoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type TrabajoImpresionCreateWithoutCreadoPorInput = {
    pesoBruto: string
    unidadBruto: string
    cantidadNeta?: string | null
    unidadNeta: string
    proforma: string
    imagenPath?: string | null
    estado?: $Enums.EstadoTrabajoImpresion
    mensajeError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lote: LoteCreateNestedOneWithoutTrabajosImpresionInput
    plantilla: PlantillaCreateNestedOneWithoutTrabajosImpresionInput
  }

  export type TrabajoImpresionUncheckedCreateWithoutCreadoPorInput = {
    id?: number
    loteId: number
    plantillaId: number
    pesoBruto: string
    unidadBruto: string
    cantidadNeta?: string | null
    unidadNeta: string
    proforma: string
    imagenPath?: string | null
    estado?: $Enums.EstadoTrabajoImpresion
    mensajeError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrabajoImpresionCreateOrConnectWithoutCreadoPorInput = {
    where: TrabajoImpresionWhereUniqueInput
    create: XOR<TrabajoImpresionCreateWithoutCreadoPorInput, TrabajoImpresionUncheckedCreateWithoutCreadoPorInput>
  }

  export type TrabajoImpresionCreateManyCreadoPorInputEnvelope = {
    data: TrabajoImpresionCreateManyCreadoPorInput | TrabajoImpresionCreateManyCreadoPorInput[]
    skipDuplicates?: boolean
  }

  export type PermisoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PermisoWhereUniqueInput
    update: XOR<PermisoUpdateWithoutUsuarioInput, PermisoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PermisoCreateWithoutUsuarioInput, PermisoUncheckedCreateWithoutUsuarioInput>
  }

  export type PermisoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PermisoWhereUniqueInput
    data: XOR<PermisoUpdateWithoutUsuarioInput, PermisoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PermisoUpdateManyWithWhereWithoutUsuarioInput = {
    where: PermisoScalarWhereInput
    data: XOR<PermisoUpdateManyMutationInput, PermisoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PermisoScalarWhereInput = {
    AND?: PermisoScalarWhereInput | PermisoScalarWhereInput[]
    OR?: PermisoScalarWhereInput[]
    NOT?: PermisoScalarWhereInput | PermisoScalarWhereInput[]
    id?: IntFilter<"Permiso"> | number
    usuarioId?: IntFilter<"Permiso"> | number
    recurso?: EnumRecursoFilter<"Permiso"> | $Enums.Recurso
    puedeVer?: BoolFilter<"Permiso"> | boolean
    puedeCrear?: BoolFilter<"Permiso"> | boolean
    puedeEditar?: BoolFilter<"Permiso"> | boolean
    puedeEliminar?: BoolFilter<"Permiso"> | boolean
  }

  export type TrabajoImpresionUpsertWithWhereUniqueWithoutCreadoPorInput = {
    where: TrabajoImpresionWhereUniqueInput
    update: XOR<TrabajoImpresionUpdateWithoutCreadoPorInput, TrabajoImpresionUncheckedUpdateWithoutCreadoPorInput>
    create: XOR<TrabajoImpresionCreateWithoutCreadoPorInput, TrabajoImpresionUncheckedCreateWithoutCreadoPorInput>
  }

  export type TrabajoImpresionUpdateWithWhereUniqueWithoutCreadoPorInput = {
    where: TrabajoImpresionWhereUniqueInput
    data: XOR<TrabajoImpresionUpdateWithoutCreadoPorInput, TrabajoImpresionUncheckedUpdateWithoutCreadoPorInput>
  }

  export type TrabajoImpresionUpdateManyWithWhereWithoutCreadoPorInput = {
    where: TrabajoImpresionScalarWhereInput
    data: XOR<TrabajoImpresionUpdateManyMutationInput, TrabajoImpresionUncheckedUpdateManyWithoutCreadoPorInput>
  }

  export type TrabajoImpresionScalarWhereInput = {
    AND?: TrabajoImpresionScalarWhereInput | TrabajoImpresionScalarWhereInput[]
    OR?: TrabajoImpresionScalarWhereInput[]
    NOT?: TrabajoImpresionScalarWhereInput | TrabajoImpresionScalarWhereInput[]
    id?: IntFilter<"TrabajoImpresion"> | number
    loteId?: IntFilter<"TrabajoImpresion"> | number
    plantillaId?: IntFilter<"TrabajoImpresion"> | number
    pesoBruto?: StringFilter<"TrabajoImpresion"> | string
    unidadBruto?: StringFilter<"TrabajoImpresion"> | string
    cantidadNeta?: StringNullableFilter<"TrabajoImpresion"> | string | null
    unidadNeta?: StringFilter<"TrabajoImpresion"> | string
    proforma?: StringFilter<"TrabajoImpresion"> | string
    imagenPath?: StringNullableFilter<"TrabajoImpresion"> | string | null
    estado?: EnumEstadoTrabajoImpresionFilter<"TrabajoImpresion"> | $Enums.EstadoTrabajoImpresion
    mensajeError?: StringNullableFilter<"TrabajoImpresion"> | string | null
    creadoPorId?: IntFilter<"TrabajoImpresion"> | number
    createdAt?: DateTimeFilter<"TrabajoImpresion"> | Date | string
    updatedAt?: DateTimeFilter<"TrabajoImpresion"> | Date | string
  }

  export type UsuarioCreateWithoutPermisosInput = {
    supabaseUserId: string
    nombre: string
    esAdmin?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
    trabajosImpresion?: TrabajoImpresionCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioUncheckedCreateWithoutPermisosInput = {
    id?: number
    supabaseUserId: string
    nombre: string
    esAdmin?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
    trabajosImpresion?: TrabajoImpresionUncheckedCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioCreateOrConnectWithoutPermisosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPermisosInput, UsuarioUncheckedCreateWithoutPermisosInput>
  }

  export type UsuarioUpsertWithoutPermisosInput = {
    update: XOR<UsuarioUpdateWithoutPermisosInput, UsuarioUncheckedUpdateWithoutPermisosInput>
    create: XOR<UsuarioCreateWithoutPermisosInput, UsuarioUncheckedCreateWithoutPermisosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPermisosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPermisosInput, UsuarioUncheckedUpdateWithoutPermisosInput>
  }

  export type UsuarioUpdateWithoutPermisosInput = {
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    esAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trabajosImpresion?: TrabajoImpresionUpdateManyWithoutCreadoPorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPermisosInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    esAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trabajosImpresion?: TrabajoImpresionUncheckedUpdateManyWithoutCreadoPorNestedInput
  }

  export type LoteCreateWithoutFabricanteInput = {
    numeroLote: string
    fechaFabricacion: string
    fechaVencimiento: string
    fechaVencimientoOrden?: Date | string | null
    coaUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    producto: ProductoCreateNestedOneWithoutLotesInput
    trabajosImpresion?: TrabajoImpresionCreateNestedManyWithoutLoteInput
  }

  export type LoteUncheckedCreateWithoutFabricanteInput = {
    id?: number
    numeroLote: string
    fechaFabricacion: string
    fechaVencimiento: string
    fechaVencimientoOrden?: Date | string | null
    coaUrl?: string | null
    productoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trabajosImpresion?: TrabajoImpresionUncheckedCreateNestedManyWithoutLoteInput
  }

  export type LoteCreateOrConnectWithoutFabricanteInput = {
    where: LoteWhereUniqueInput
    create: XOR<LoteCreateWithoutFabricanteInput, LoteUncheckedCreateWithoutFabricanteInput>
  }

  export type LoteCreateManyFabricanteInputEnvelope = {
    data: LoteCreateManyFabricanteInput | LoteCreateManyFabricanteInput[]
    skipDuplicates?: boolean
  }

  export type LoteUpsertWithWhereUniqueWithoutFabricanteInput = {
    where: LoteWhereUniqueInput
    update: XOR<LoteUpdateWithoutFabricanteInput, LoteUncheckedUpdateWithoutFabricanteInput>
    create: XOR<LoteCreateWithoutFabricanteInput, LoteUncheckedCreateWithoutFabricanteInput>
  }

  export type LoteUpdateWithWhereUniqueWithoutFabricanteInput = {
    where: LoteWhereUniqueInput
    data: XOR<LoteUpdateWithoutFabricanteInput, LoteUncheckedUpdateWithoutFabricanteInput>
  }

  export type LoteUpdateManyWithWhereWithoutFabricanteInput = {
    where: LoteScalarWhereInput
    data: XOR<LoteUpdateManyMutationInput, LoteUncheckedUpdateManyWithoutFabricanteInput>
  }

  export type LoteScalarWhereInput = {
    AND?: LoteScalarWhereInput | LoteScalarWhereInput[]
    OR?: LoteScalarWhereInput[]
    NOT?: LoteScalarWhereInput | LoteScalarWhereInput[]
    id?: IntFilter<"Lote"> | number
    numeroLote?: StringFilter<"Lote"> | string
    fechaFabricacion?: StringFilter<"Lote"> | string
    fechaVencimiento?: StringFilter<"Lote"> | string
    fechaVencimientoOrden?: DateTimeNullableFilter<"Lote"> | Date | string | null
    coaUrl?: StringNullableFilter<"Lote"> | string | null
    productoId?: IntFilter<"Lote"> | number
    fabricanteId?: IntFilter<"Lote"> | number
    createdAt?: DateTimeFilter<"Lote"> | Date | string
    updatedAt?: DateTimeFilter<"Lote"> | Date | string
  }

  export type LoteCreateWithoutProductoInput = {
    numeroLote: string
    fechaFabricacion: string
    fechaVencimiento: string
    fechaVencimientoOrden?: Date | string | null
    coaUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fabricante: FabricanteCreateNestedOneWithoutLotesInput
    trabajosImpresion?: TrabajoImpresionCreateNestedManyWithoutLoteInput
  }

  export type LoteUncheckedCreateWithoutProductoInput = {
    id?: number
    numeroLote: string
    fechaFabricacion: string
    fechaVencimiento: string
    fechaVencimientoOrden?: Date | string | null
    coaUrl?: string | null
    fabricanteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trabajosImpresion?: TrabajoImpresionUncheckedCreateNestedManyWithoutLoteInput
  }

  export type LoteCreateOrConnectWithoutProductoInput = {
    where: LoteWhereUniqueInput
    create: XOR<LoteCreateWithoutProductoInput, LoteUncheckedCreateWithoutProductoInput>
  }

  export type LoteCreateManyProductoInputEnvelope = {
    data: LoteCreateManyProductoInput | LoteCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type LoteUpsertWithWhereUniqueWithoutProductoInput = {
    where: LoteWhereUniqueInput
    update: XOR<LoteUpdateWithoutProductoInput, LoteUncheckedUpdateWithoutProductoInput>
    create: XOR<LoteCreateWithoutProductoInput, LoteUncheckedCreateWithoutProductoInput>
  }

  export type LoteUpdateWithWhereUniqueWithoutProductoInput = {
    where: LoteWhereUniqueInput
    data: XOR<LoteUpdateWithoutProductoInput, LoteUncheckedUpdateWithoutProductoInput>
  }

  export type LoteUpdateManyWithWhereWithoutProductoInput = {
    where: LoteScalarWhereInput
    data: XOR<LoteUpdateManyMutationInput, LoteUncheckedUpdateManyWithoutProductoInput>
  }

  export type TrabajoImpresionCreateWithoutPlantillaInput = {
    pesoBruto: string
    unidadBruto: string
    cantidadNeta?: string | null
    unidadNeta: string
    proforma: string
    imagenPath?: string | null
    estado?: $Enums.EstadoTrabajoImpresion
    mensajeError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lote: LoteCreateNestedOneWithoutTrabajosImpresionInput
    creadoPor: UsuarioCreateNestedOneWithoutTrabajosImpresionInput
  }

  export type TrabajoImpresionUncheckedCreateWithoutPlantillaInput = {
    id?: number
    loteId: number
    pesoBruto: string
    unidadBruto: string
    cantidadNeta?: string | null
    unidadNeta: string
    proforma: string
    imagenPath?: string | null
    estado?: $Enums.EstadoTrabajoImpresion
    mensajeError?: string | null
    creadoPorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrabajoImpresionCreateOrConnectWithoutPlantillaInput = {
    where: TrabajoImpresionWhereUniqueInput
    create: XOR<TrabajoImpresionCreateWithoutPlantillaInput, TrabajoImpresionUncheckedCreateWithoutPlantillaInput>
  }

  export type TrabajoImpresionCreateManyPlantillaInputEnvelope = {
    data: TrabajoImpresionCreateManyPlantillaInput | TrabajoImpresionCreateManyPlantillaInput[]
    skipDuplicates?: boolean
  }

  export type TrabajoImpresionUpsertWithWhereUniqueWithoutPlantillaInput = {
    where: TrabajoImpresionWhereUniqueInput
    update: XOR<TrabajoImpresionUpdateWithoutPlantillaInput, TrabajoImpresionUncheckedUpdateWithoutPlantillaInput>
    create: XOR<TrabajoImpresionCreateWithoutPlantillaInput, TrabajoImpresionUncheckedCreateWithoutPlantillaInput>
  }

  export type TrabajoImpresionUpdateWithWhereUniqueWithoutPlantillaInput = {
    where: TrabajoImpresionWhereUniqueInput
    data: XOR<TrabajoImpresionUpdateWithoutPlantillaInput, TrabajoImpresionUncheckedUpdateWithoutPlantillaInput>
  }

  export type TrabajoImpresionUpdateManyWithWhereWithoutPlantillaInput = {
    where: TrabajoImpresionScalarWhereInput
    data: XOR<TrabajoImpresionUpdateManyMutationInput, TrabajoImpresionUncheckedUpdateManyWithoutPlantillaInput>
  }

  export type ProductoCreateWithoutLotesInput = {
    nombre: string
    nombreNormalizado: string
    nfpaSalud?: number | null
    nfpaInflamabilidad?: number | null
    nfpaReactividad?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductoUncheckedCreateWithoutLotesInput = {
    id?: number
    nombre: string
    nombreNormalizado: string
    nfpaSalud?: number | null
    nfpaInflamabilidad?: number | null
    nfpaReactividad?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductoCreateOrConnectWithoutLotesInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutLotesInput, ProductoUncheckedCreateWithoutLotesInput>
  }

  export type FabricanteCreateWithoutLotesInput = {
    nombre: string
    nombreNormalizado: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FabricanteUncheckedCreateWithoutLotesInput = {
    id?: number
    nombre: string
    nombreNormalizado: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FabricanteCreateOrConnectWithoutLotesInput = {
    where: FabricanteWhereUniqueInput
    create: XOR<FabricanteCreateWithoutLotesInput, FabricanteUncheckedCreateWithoutLotesInput>
  }

  export type TrabajoImpresionCreateWithoutLoteInput = {
    pesoBruto: string
    unidadBruto: string
    cantidadNeta?: string | null
    unidadNeta: string
    proforma: string
    imagenPath?: string | null
    estado?: $Enums.EstadoTrabajoImpresion
    mensajeError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plantilla: PlantillaCreateNestedOneWithoutTrabajosImpresionInput
    creadoPor: UsuarioCreateNestedOneWithoutTrabajosImpresionInput
  }

  export type TrabajoImpresionUncheckedCreateWithoutLoteInput = {
    id?: number
    plantillaId: number
    pesoBruto: string
    unidadBruto: string
    cantidadNeta?: string | null
    unidadNeta: string
    proforma: string
    imagenPath?: string | null
    estado?: $Enums.EstadoTrabajoImpresion
    mensajeError?: string | null
    creadoPorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrabajoImpresionCreateOrConnectWithoutLoteInput = {
    where: TrabajoImpresionWhereUniqueInput
    create: XOR<TrabajoImpresionCreateWithoutLoteInput, TrabajoImpresionUncheckedCreateWithoutLoteInput>
  }

  export type TrabajoImpresionCreateManyLoteInputEnvelope = {
    data: TrabajoImpresionCreateManyLoteInput | TrabajoImpresionCreateManyLoteInput[]
    skipDuplicates?: boolean
  }

  export type ProductoUpsertWithoutLotesInput = {
    update: XOR<ProductoUpdateWithoutLotesInput, ProductoUncheckedUpdateWithoutLotesInput>
    create: XOR<ProductoCreateWithoutLotesInput, ProductoUncheckedCreateWithoutLotesInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutLotesInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutLotesInput, ProductoUncheckedUpdateWithoutLotesInput>
  }

  export type ProductoUpdateWithoutLotesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nombreNormalizado?: StringFieldUpdateOperationsInput | string
    nfpaSalud?: NullableIntFieldUpdateOperationsInput | number | null
    nfpaInflamabilidad?: NullableIntFieldUpdateOperationsInput | number | null
    nfpaReactividad?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoUncheckedUpdateWithoutLotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nombreNormalizado?: StringFieldUpdateOperationsInput | string
    nfpaSalud?: NullableIntFieldUpdateOperationsInput | number | null
    nfpaInflamabilidad?: NullableIntFieldUpdateOperationsInput | number | null
    nfpaReactividad?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FabricanteUpsertWithoutLotesInput = {
    update: XOR<FabricanteUpdateWithoutLotesInput, FabricanteUncheckedUpdateWithoutLotesInput>
    create: XOR<FabricanteCreateWithoutLotesInput, FabricanteUncheckedCreateWithoutLotesInput>
    where?: FabricanteWhereInput
  }

  export type FabricanteUpdateToOneWithWhereWithoutLotesInput = {
    where?: FabricanteWhereInput
    data: XOR<FabricanteUpdateWithoutLotesInput, FabricanteUncheckedUpdateWithoutLotesInput>
  }

  export type FabricanteUpdateWithoutLotesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nombreNormalizado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FabricanteUncheckedUpdateWithoutLotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nombreNormalizado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrabajoImpresionUpsertWithWhereUniqueWithoutLoteInput = {
    where: TrabajoImpresionWhereUniqueInput
    update: XOR<TrabajoImpresionUpdateWithoutLoteInput, TrabajoImpresionUncheckedUpdateWithoutLoteInput>
    create: XOR<TrabajoImpresionCreateWithoutLoteInput, TrabajoImpresionUncheckedCreateWithoutLoteInput>
  }

  export type TrabajoImpresionUpdateWithWhereUniqueWithoutLoteInput = {
    where: TrabajoImpresionWhereUniqueInput
    data: XOR<TrabajoImpresionUpdateWithoutLoteInput, TrabajoImpresionUncheckedUpdateWithoutLoteInput>
  }

  export type TrabajoImpresionUpdateManyWithWhereWithoutLoteInput = {
    where: TrabajoImpresionScalarWhereInput
    data: XOR<TrabajoImpresionUpdateManyMutationInput, TrabajoImpresionUncheckedUpdateManyWithoutLoteInput>
  }

  export type LoteCreateWithoutTrabajosImpresionInput = {
    numeroLote: string
    fechaFabricacion: string
    fechaVencimiento: string
    fechaVencimientoOrden?: Date | string | null
    coaUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    producto: ProductoCreateNestedOneWithoutLotesInput
    fabricante: FabricanteCreateNestedOneWithoutLotesInput
  }

  export type LoteUncheckedCreateWithoutTrabajosImpresionInput = {
    id?: number
    numeroLote: string
    fechaFabricacion: string
    fechaVencimiento: string
    fechaVencimientoOrden?: Date | string | null
    coaUrl?: string | null
    productoId: number
    fabricanteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoteCreateOrConnectWithoutTrabajosImpresionInput = {
    where: LoteWhereUniqueInput
    create: XOR<LoteCreateWithoutTrabajosImpresionInput, LoteUncheckedCreateWithoutTrabajosImpresionInput>
  }

  export type PlantillaCreateWithoutTrabajosImpresionInput = {
    nombre: string
    archivo: string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlantillaUncheckedCreateWithoutTrabajosImpresionInput = {
    id?: number
    nombre: string
    archivo: string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlantillaCreateOrConnectWithoutTrabajosImpresionInput = {
    where: PlantillaWhereUniqueInput
    create: XOR<PlantillaCreateWithoutTrabajosImpresionInput, PlantillaUncheckedCreateWithoutTrabajosImpresionInput>
  }

  export type UsuarioCreateWithoutTrabajosImpresionInput = {
    supabaseUserId: string
    nombre: string
    esAdmin?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
    permisos?: PermisoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutTrabajosImpresionInput = {
    id?: number
    supabaseUserId: string
    nombre: string
    esAdmin?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
    permisos?: PermisoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutTrabajosImpresionInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTrabajosImpresionInput, UsuarioUncheckedCreateWithoutTrabajosImpresionInput>
  }

  export type LoteUpsertWithoutTrabajosImpresionInput = {
    update: XOR<LoteUpdateWithoutTrabajosImpresionInput, LoteUncheckedUpdateWithoutTrabajosImpresionInput>
    create: XOR<LoteCreateWithoutTrabajosImpresionInput, LoteUncheckedCreateWithoutTrabajosImpresionInput>
    where?: LoteWhereInput
  }

  export type LoteUpdateToOneWithWhereWithoutTrabajosImpresionInput = {
    where?: LoteWhereInput
    data: XOR<LoteUpdateWithoutTrabajosImpresionInput, LoteUncheckedUpdateWithoutTrabajosImpresionInput>
  }

  export type LoteUpdateWithoutTrabajosImpresionInput = {
    numeroLote?: StringFieldUpdateOperationsInput | string
    fechaFabricacion?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: StringFieldUpdateOperationsInput | string
    fechaVencimientoOrden?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: ProductoUpdateOneRequiredWithoutLotesNestedInput
    fabricante?: FabricanteUpdateOneRequiredWithoutLotesNestedInput
  }

  export type LoteUncheckedUpdateWithoutTrabajosImpresionInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroLote?: StringFieldUpdateOperationsInput | string
    fechaFabricacion?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: StringFieldUpdateOperationsInput | string
    fechaVencimientoOrden?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    productoId?: IntFieldUpdateOperationsInput | number
    fabricanteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlantillaUpsertWithoutTrabajosImpresionInput = {
    update: XOR<PlantillaUpdateWithoutTrabajosImpresionInput, PlantillaUncheckedUpdateWithoutTrabajosImpresionInput>
    create: XOR<PlantillaCreateWithoutTrabajosImpresionInput, PlantillaUncheckedCreateWithoutTrabajosImpresionInput>
    where?: PlantillaWhereInput
  }

  export type PlantillaUpdateToOneWithWhereWithoutTrabajosImpresionInput = {
    where?: PlantillaWhereInput
    data: XOR<PlantillaUpdateWithoutTrabajosImpresionInput, PlantillaUncheckedUpdateWithoutTrabajosImpresionInput>
  }

  export type PlantillaUpdateWithoutTrabajosImpresionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlantillaUncheckedUpdateWithoutTrabajosImpresionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUpsertWithoutTrabajosImpresionInput = {
    update: XOR<UsuarioUpdateWithoutTrabajosImpresionInput, UsuarioUncheckedUpdateWithoutTrabajosImpresionInput>
    create: XOR<UsuarioCreateWithoutTrabajosImpresionInput, UsuarioUncheckedCreateWithoutTrabajosImpresionInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTrabajosImpresionInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTrabajosImpresionInput, UsuarioUncheckedUpdateWithoutTrabajosImpresionInput>
  }

  export type UsuarioUpdateWithoutTrabajosImpresionInput = {
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    esAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permisos?: PermisoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTrabajosImpresionInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    esAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permisos?: PermisoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PermisoCreateManyUsuarioInput = {
    id?: number
    recurso: $Enums.Recurso
    puedeVer?: boolean
    puedeCrear?: boolean
    puedeEditar?: boolean
    puedeEliminar?: boolean
  }

  export type TrabajoImpresionCreateManyCreadoPorInput = {
    id?: number
    loteId: number
    plantillaId: number
    pesoBruto: string
    unidadBruto: string
    cantidadNeta?: string | null
    unidadNeta: string
    proforma: string
    imagenPath?: string | null
    estado?: $Enums.EstadoTrabajoImpresion
    mensajeError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermisoUpdateWithoutUsuarioInput = {
    recurso?: EnumRecursoFieldUpdateOperationsInput | $Enums.Recurso
    puedeVer?: BoolFieldUpdateOperationsInput | boolean
    puedeCrear?: BoolFieldUpdateOperationsInput | boolean
    puedeEditar?: BoolFieldUpdateOperationsInput | boolean
    puedeEliminar?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PermisoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    recurso?: EnumRecursoFieldUpdateOperationsInput | $Enums.Recurso
    puedeVer?: BoolFieldUpdateOperationsInput | boolean
    puedeCrear?: BoolFieldUpdateOperationsInput | boolean
    puedeEditar?: BoolFieldUpdateOperationsInput | boolean
    puedeEliminar?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PermisoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    recurso?: EnumRecursoFieldUpdateOperationsInput | $Enums.Recurso
    puedeVer?: BoolFieldUpdateOperationsInput | boolean
    puedeCrear?: BoolFieldUpdateOperationsInput | boolean
    puedeEditar?: BoolFieldUpdateOperationsInput | boolean
    puedeEliminar?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrabajoImpresionUpdateWithoutCreadoPorInput = {
    pesoBruto?: StringFieldUpdateOperationsInput | string
    unidadBruto?: StringFieldUpdateOperationsInput | string
    cantidadNeta?: NullableStringFieldUpdateOperationsInput | string | null
    unidadNeta?: StringFieldUpdateOperationsInput | string
    proforma?: StringFieldUpdateOperationsInput | string
    imagenPath?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTrabajoImpresionFieldUpdateOperationsInput | $Enums.EstadoTrabajoImpresion
    mensajeError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lote?: LoteUpdateOneRequiredWithoutTrabajosImpresionNestedInput
    plantilla?: PlantillaUpdateOneRequiredWithoutTrabajosImpresionNestedInput
  }

  export type TrabajoImpresionUncheckedUpdateWithoutCreadoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    loteId?: IntFieldUpdateOperationsInput | number
    plantillaId?: IntFieldUpdateOperationsInput | number
    pesoBruto?: StringFieldUpdateOperationsInput | string
    unidadBruto?: StringFieldUpdateOperationsInput | string
    cantidadNeta?: NullableStringFieldUpdateOperationsInput | string | null
    unidadNeta?: StringFieldUpdateOperationsInput | string
    proforma?: StringFieldUpdateOperationsInput | string
    imagenPath?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTrabajoImpresionFieldUpdateOperationsInput | $Enums.EstadoTrabajoImpresion
    mensajeError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrabajoImpresionUncheckedUpdateManyWithoutCreadoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    loteId?: IntFieldUpdateOperationsInput | number
    plantillaId?: IntFieldUpdateOperationsInput | number
    pesoBruto?: StringFieldUpdateOperationsInput | string
    unidadBruto?: StringFieldUpdateOperationsInput | string
    cantidadNeta?: NullableStringFieldUpdateOperationsInput | string | null
    unidadNeta?: StringFieldUpdateOperationsInput | string
    proforma?: StringFieldUpdateOperationsInput | string
    imagenPath?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTrabajoImpresionFieldUpdateOperationsInput | $Enums.EstadoTrabajoImpresion
    mensajeError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoteCreateManyFabricanteInput = {
    id?: number
    numeroLote: string
    fechaFabricacion: string
    fechaVencimiento: string
    fechaVencimientoOrden?: Date | string | null
    coaUrl?: string | null
    productoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoteUpdateWithoutFabricanteInput = {
    numeroLote?: StringFieldUpdateOperationsInput | string
    fechaFabricacion?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: StringFieldUpdateOperationsInput | string
    fechaVencimientoOrden?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: ProductoUpdateOneRequiredWithoutLotesNestedInput
    trabajosImpresion?: TrabajoImpresionUpdateManyWithoutLoteNestedInput
  }

  export type LoteUncheckedUpdateWithoutFabricanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroLote?: StringFieldUpdateOperationsInput | string
    fechaFabricacion?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: StringFieldUpdateOperationsInput | string
    fechaVencimientoOrden?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    productoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trabajosImpresion?: TrabajoImpresionUncheckedUpdateManyWithoutLoteNestedInput
  }

  export type LoteUncheckedUpdateManyWithoutFabricanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroLote?: StringFieldUpdateOperationsInput | string
    fechaFabricacion?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: StringFieldUpdateOperationsInput | string
    fechaVencimientoOrden?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    productoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoteCreateManyProductoInput = {
    id?: number
    numeroLote: string
    fechaFabricacion: string
    fechaVencimiento: string
    fechaVencimientoOrden?: Date | string | null
    coaUrl?: string | null
    fabricanteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoteUpdateWithoutProductoInput = {
    numeroLote?: StringFieldUpdateOperationsInput | string
    fechaFabricacion?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: StringFieldUpdateOperationsInput | string
    fechaVencimientoOrden?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fabricante?: FabricanteUpdateOneRequiredWithoutLotesNestedInput
    trabajosImpresion?: TrabajoImpresionUpdateManyWithoutLoteNestedInput
  }

  export type LoteUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroLote?: StringFieldUpdateOperationsInput | string
    fechaFabricacion?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: StringFieldUpdateOperationsInput | string
    fechaVencimientoOrden?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fabricanteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trabajosImpresion?: TrabajoImpresionUncheckedUpdateManyWithoutLoteNestedInput
  }

  export type LoteUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroLote?: StringFieldUpdateOperationsInput | string
    fechaFabricacion?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: StringFieldUpdateOperationsInput | string
    fechaVencimientoOrden?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fabricanteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrabajoImpresionCreateManyPlantillaInput = {
    id?: number
    loteId: number
    pesoBruto: string
    unidadBruto: string
    cantidadNeta?: string | null
    unidadNeta: string
    proforma: string
    imagenPath?: string | null
    estado?: $Enums.EstadoTrabajoImpresion
    mensajeError?: string | null
    creadoPorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrabajoImpresionUpdateWithoutPlantillaInput = {
    pesoBruto?: StringFieldUpdateOperationsInput | string
    unidadBruto?: StringFieldUpdateOperationsInput | string
    cantidadNeta?: NullableStringFieldUpdateOperationsInput | string | null
    unidadNeta?: StringFieldUpdateOperationsInput | string
    proforma?: StringFieldUpdateOperationsInput | string
    imagenPath?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTrabajoImpresionFieldUpdateOperationsInput | $Enums.EstadoTrabajoImpresion
    mensajeError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lote?: LoteUpdateOneRequiredWithoutTrabajosImpresionNestedInput
    creadoPor?: UsuarioUpdateOneRequiredWithoutTrabajosImpresionNestedInput
  }

  export type TrabajoImpresionUncheckedUpdateWithoutPlantillaInput = {
    id?: IntFieldUpdateOperationsInput | number
    loteId?: IntFieldUpdateOperationsInput | number
    pesoBruto?: StringFieldUpdateOperationsInput | string
    unidadBruto?: StringFieldUpdateOperationsInput | string
    cantidadNeta?: NullableStringFieldUpdateOperationsInput | string | null
    unidadNeta?: StringFieldUpdateOperationsInput | string
    proforma?: StringFieldUpdateOperationsInput | string
    imagenPath?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTrabajoImpresionFieldUpdateOperationsInput | $Enums.EstadoTrabajoImpresion
    mensajeError?: NullableStringFieldUpdateOperationsInput | string | null
    creadoPorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrabajoImpresionUncheckedUpdateManyWithoutPlantillaInput = {
    id?: IntFieldUpdateOperationsInput | number
    loteId?: IntFieldUpdateOperationsInput | number
    pesoBruto?: StringFieldUpdateOperationsInput | string
    unidadBruto?: StringFieldUpdateOperationsInput | string
    cantidadNeta?: NullableStringFieldUpdateOperationsInput | string | null
    unidadNeta?: StringFieldUpdateOperationsInput | string
    proforma?: StringFieldUpdateOperationsInput | string
    imagenPath?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTrabajoImpresionFieldUpdateOperationsInput | $Enums.EstadoTrabajoImpresion
    mensajeError?: NullableStringFieldUpdateOperationsInput | string | null
    creadoPorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrabajoImpresionCreateManyLoteInput = {
    id?: number
    plantillaId: number
    pesoBruto: string
    unidadBruto: string
    cantidadNeta?: string | null
    unidadNeta: string
    proforma: string
    imagenPath?: string | null
    estado?: $Enums.EstadoTrabajoImpresion
    mensajeError?: string | null
    creadoPorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrabajoImpresionUpdateWithoutLoteInput = {
    pesoBruto?: StringFieldUpdateOperationsInput | string
    unidadBruto?: StringFieldUpdateOperationsInput | string
    cantidadNeta?: NullableStringFieldUpdateOperationsInput | string | null
    unidadNeta?: StringFieldUpdateOperationsInput | string
    proforma?: StringFieldUpdateOperationsInput | string
    imagenPath?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTrabajoImpresionFieldUpdateOperationsInput | $Enums.EstadoTrabajoImpresion
    mensajeError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plantilla?: PlantillaUpdateOneRequiredWithoutTrabajosImpresionNestedInput
    creadoPor?: UsuarioUpdateOneRequiredWithoutTrabajosImpresionNestedInput
  }

  export type TrabajoImpresionUncheckedUpdateWithoutLoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    plantillaId?: IntFieldUpdateOperationsInput | number
    pesoBruto?: StringFieldUpdateOperationsInput | string
    unidadBruto?: StringFieldUpdateOperationsInput | string
    cantidadNeta?: NullableStringFieldUpdateOperationsInput | string | null
    unidadNeta?: StringFieldUpdateOperationsInput | string
    proforma?: StringFieldUpdateOperationsInput | string
    imagenPath?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTrabajoImpresionFieldUpdateOperationsInput | $Enums.EstadoTrabajoImpresion
    mensajeError?: NullableStringFieldUpdateOperationsInput | string | null
    creadoPorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrabajoImpresionUncheckedUpdateManyWithoutLoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    plantillaId?: IntFieldUpdateOperationsInput | number
    pesoBruto?: StringFieldUpdateOperationsInput | string
    unidadBruto?: StringFieldUpdateOperationsInput | string
    cantidadNeta?: NullableStringFieldUpdateOperationsInput | string | null
    unidadNeta?: StringFieldUpdateOperationsInput | string
    proforma?: StringFieldUpdateOperationsInput | string
    imagenPath?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTrabajoImpresionFieldUpdateOperationsInput | $Enums.EstadoTrabajoImpresion
    mensajeError?: NullableStringFieldUpdateOperationsInput | string | null
    creadoPorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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