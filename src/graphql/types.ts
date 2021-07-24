import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "todos" */
  delete_todos?: Maybe<TodosMutationResponse>;
  /** delete single row from the table: "todos" */
  delete_todos_by_pk?: Maybe<Todos>;
  /** insert data into the table: "todos" */
  insert_todos?: Maybe<TodosMutationResponse>;
  /** insert a single row into the table: "todos" */
  insert_todos_one?: Maybe<Todos>;
  /** update data of the table: "todos" */
  update_todos?: Maybe<TodosMutationResponse>;
  /** update single row of the table: "todos" */
  update_todos_by_pk?: Maybe<Todos>;
};


/** mutation root */
export type MutationRootDeleteTodosArgs = {
  where: TodosBoolExp;
};


/** mutation root */
export type MutationRootDeleteTodosByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootInsertTodosArgs = {
  objects: Array<TodosInsertInput>;
  on_conflict?: Maybe<TodosOnConflict>;
};


/** mutation root */
export type MutationRootInsertTodosOneArgs = {
  object: TodosInsertInput;
  on_conflict?: Maybe<TodosOnConflict>;
};


/** mutation root */
export type MutationRootUpdateTodosArgs = {
  _inc?: Maybe<TodosIncInput>;
  _set?: Maybe<TodosSetInput>;
  where: TodosBoolExp;
};


/** mutation root */
export type MutationRootUpdateTodosByPkArgs = {
  _inc?: Maybe<TodosIncInput>;
  _set?: Maybe<TodosSetInput>;
  pk_columns: TodosPkColumnsInput;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: TodosAggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
};


export type QueryRootTodosArgs = {
  distinct_on?: Maybe<Array<TodosSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TodosOrderBy>>;
  where?: Maybe<TodosBoolExp>;
};


export type QueryRootTodosAggregateArgs = {
  distinct_on?: Maybe<Array<TodosSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TodosOrderBy>>;
  where?: Maybe<TodosBoolExp>;
};


export type QueryRootTodosByPkArgs = {
  id: Scalars['Int'];
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: TodosAggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
};


export type SubscriptionRootTodosArgs = {
  distinct_on?: Maybe<Array<TodosSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TodosOrderBy>>;
  where?: Maybe<TodosBoolExp>;
};


export type SubscriptionRootTodosAggregateArgs = {
  distinct_on?: Maybe<Array<TodosSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TodosOrderBy>>;
  where?: Maybe<TodosBoolExp>;
};


export type SubscriptionRootTodosByPkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "todos" */
export type Todos = {
  __typename?: 'todos';
  id: Scalars['Int'];
  isDone: Scalars['Boolean'];
  title: Scalars['String'];
};

/** aggregated selection of "todos" */
export type TodosAggregate = {
  __typename?: 'todos_aggregate';
  aggregate?: Maybe<TodosAggregateFields>;
  nodes: Array<Todos>;
};

/** aggregate fields of "todos" */
export type TodosAggregateFields = {
  __typename?: 'todos_aggregate_fields';
  avg?: Maybe<TodosAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<TodosMaxFields>;
  min?: Maybe<TodosMinFields>;
  stddev?: Maybe<TodosStddevFields>;
  stddev_pop?: Maybe<TodosStddevPopFields>;
  stddev_samp?: Maybe<TodosStddevSampFields>;
  sum?: Maybe<TodosSumFields>;
  var_pop?: Maybe<TodosVarPopFields>;
  var_samp?: Maybe<TodosVarSampFields>;
  variance?: Maybe<TodosVarianceFields>;
};


/** aggregate fields of "todos" */
export type TodosAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TodosSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type TodosAvgFields = {
  __typename?: 'todos_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type TodosBoolExp = {
  _and?: Maybe<Array<TodosBoolExp>>;
  _not?: Maybe<TodosBoolExp>;
  _or?: Maybe<Array<TodosBoolExp>>;
  id?: Maybe<IntComparisonExp>;
  isDone?: Maybe<BooleanComparisonExp>;
  title?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "todos" */
export enum TodosConstraint {
  /** unique or primary key constraint */
  TodosPkey = 'todos_pkey'
}

/** input type for incrementing numeric columns in table "todos" */
export type TodosIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "todos" */
export type TodosInsertInput = {
  id?: Maybe<Scalars['Int']>;
  isDone?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TodosMaxFields = {
  __typename?: 'todos_max_fields';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type TodosMinFields = {
  __typename?: 'todos_min_fields';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "todos" */
export type TodosMutationResponse = {
  __typename?: 'todos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Todos>;
};

/** on conflict condition type for table "todos" */
export type TodosOnConflict = {
  constraint: TodosConstraint;
  update_columns?: Array<TodosUpdateColumn>;
  where?: Maybe<TodosBoolExp>;
};

/** Ordering options when selecting data from "todos". */
export type TodosOrderBy = {
  id?: Maybe<OrderBy>;
  isDone?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

/** primary key columns input for table: todos */
export type TodosPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "todos" */
export enum TodosSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  IsDone = 'isDone',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "todos" */
export type TodosSetInput = {
  id?: Maybe<Scalars['Int']>;
  isDone?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type TodosStddevFields = {
  __typename?: 'todos_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type TodosStddevPopFields = {
  __typename?: 'todos_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type TodosStddevSampFields = {
  __typename?: 'todos_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type TodosSumFields = {
  __typename?: 'todos_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "todos" */
export enum TodosUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  IsDone = 'isDone',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type TodosVarPopFields = {
  __typename?: 'todos_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type TodosVarSampFields = {
  __typename?: 'todos_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type TodosVarianceFields = {
  __typename?: 'todos_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type UpdateTodoMutationMutationVariables = Exact<{
  id: Scalars['Int'];
  isDone?: Maybe<Scalars['Boolean']>;
}>;


export type UpdateTodoMutationMutation = (
  { __typename?: 'mutation_root' }
  & { update_todos_by_pk?: Maybe<(
    { __typename?: 'todos' }
    & Pick<Todos, 'isDone'>
  )> }
);


export const UpdateTodoMutationDocument = gql`
    mutation UpdateTodoMutation($id: Int!, $isDone: Boolean) {
  update_todos_by_pk(pk_columns: {id: $id}, _set: {isDone: $isDone}) {
    isDone
  }
}
    `;
export type UpdateTodoMutationMutationFn = Apollo.MutationFunction<UpdateTodoMutationMutation, UpdateTodoMutationMutationVariables>;

/**
 * __useUpdateTodoMutationMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutationMutation, { data, loading, error }] = useUpdateTodoMutationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      isDone: // value for 'isDone'
 *   },
 * });
 */
export function useUpdateTodoMutationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutationMutation, UpdateTodoMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoMutationMutation, UpdateTodoMutationMutationVariables>(UpdateTodoMutationDocument, options);
      }
export type UpdateTodoMutationMutationHookResult = ReturnType<typeof useUpdateTodoMutationMutation>;
export type UpdateTodoMutationMutationResult = Apollo.MutationResult<UpdateTodoMutationMutation>;
export type UpdateTodoMutationMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutationMutation, UpdateTodoMutationMutationVariables>;