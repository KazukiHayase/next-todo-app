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

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "categories" */
export type CategoriesAggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<CategoriesAggregateFields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type CategoriesAggregateFields = {
  __typename?: 'categories_aggregate_fields';
  avg?: Maybe<CategoriesAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<CategoriesMaxFields>;
  min?: Maybe<CategoriesMinFields>;
  stddev?: Maybe<CategoriesStddevFields>;
  stddev_pop?: Maybe<CategoriesStddevPopFields>;
  stddev_samp?: Maybe<CategoriesStddevSampFields>;
  sum?: Maybe<CategoriesSumFields>;
  var_pop?: Maybe<CategoriesVarPopFields>;
  var_samp?: Maybe<CategoriesVarSampFields>;
  variance?: Maybe<CategoriesVarianceFields>;
};


/** aggregate fields of "categories" */
export type CategoriesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<CategoriesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type CategoriesAvgFields = {
  __typename?: 'categories_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type CategoriesBoolExp = {
  _and?: Maybe<Array<CategoriesBoolExp>>;
  _not?: Maybe<CategoriesBoolExp>;
  _or?: Maybe<Array<CategoriesBoolExp>>;
  id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "categories" */
export enum CategoriesConstraint {
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey'
}

/** input type for incrementing numeric columns in table "categories" */
export type CategoriesIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "categories" */
export type CategoriesInsertInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type CategoriesMaxFields = {
  __typename?: 'categories_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type CategoriesMinFields = {
  __typename?: 'categories_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "categories" */
export type CategoriesMutationResponse = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** on conflict condition type for table "categories" */
export type CategoriesOnConflict = {
  constraint: CategoriesConstraint;
  update_columns?: Array<CategoriesUpdateColumn>;
  where?: Maybe<CategoriesBoolExp>;
};

/** Ordering options when selecting data from "categories". */
export type CategoriesOrderBy = {
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** primary key columns input for table: categories */
export type CategoriesPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "categories" */
export enum CategoriesSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "categories" */
export type CategoriesSetInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type CategoriesStddevFields = {
  __typename?: 'categories_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type CategoriesStddevPopFields = {
  __typename?: 'categories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type CategoriesStddevSampFields = {
  __typename?: 'categories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type CategoriesSumFields = {
  __typename?: 'categories_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "categories" */
export enum CategoriesUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type CategoriesVarPopFields = {
  __typename?: 'categories_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type CategoriesVarSampFields = {
  __typename?: 'categories_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type CategoriesVarianceFields = {
  __typename?: 'categories_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<CategoriesMutationResponse>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "tasks" */
  delete_tasks?: Maybe<TasksMutationResponse>;
  /** delete single row from the table: "tasks" */
  delete_tasks_by_pk?: Maybe<Tasks>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<CategoriesMutationResponse>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "tasks" */
  insert_tasks?: Maybe<TasksMutationResponse>;
  /** insert a single row into the table: "tasks" */
  insert_tasks_one?: Maybe<Tasks>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<CategoriesMutationResponse>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update data of the table: "tasks" */
  update_tasks?: Maybe<TasksMutationResponse>;
  /** update single row of the table: "tasks" */
  update_tasks_by_pk?: Maybe<Tasks>;
};


/** mutation root */
export type MutationRootDeleteCategoriesArgs = {
  where: CategoriesBoolExp;
};


/** mutation root */
export type MutationRootDeleteCategoriesByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteTasksArgs = {
  where: TasksBoolExp;
};


/** mutation root */
export type MutationRootDeleteTasksByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootInsertCategoriesArgs = {
  objects: Array<CategoriesInsertInput>;
  on_conflict?: Maybe<CategoriesOnConflict>;
};


/** mutation root */
export type MutationRootInsertCategoriesOneArgs = {
  object: CategoriesInsertInput;
  on_conflict?: Maybe<CategoriesOnConflict>;
};


/** mutation root */
export type MutationRootInsertTasksArgs = {
  objects: Array<TasksInsertInput>;
  on_conflict?: Maybe<TasksOnConflict>;
};


/** mutation root */
export type MutationRootInsertTasksOneArgs = {
  object: TasksInsertInput;
  on_conflict?: Maybe<TasksOnConflict>;
};


/** mutation root */
export type MutationRootUpdateCategoriesArgs = {
  _inc?: Maybe<CategoriesIncInput>;
  _set?: Maybe<CategoriesSetInput>;
  where: CategoriesBoolExp;
};


/** mutation root */
export type MutationRootUpdateCategoriesByPkArgs = {
  _inc?: Maybe<CategoriesIncInput>;
  _set?: Maybe<CategoriesSetInput>;
  pk_columns: CategoriesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateTasksArgs = {
  _inc?: Maybe<TasksIncInput>;
  _set?: Maybe<TasksSetInput>;
  where: TasksBoolExp;
};


/** mutation root */
export type MutationRootUpdateTasksByPkArgs = {
  _inc?: Maybe<TasksIncInput>;
  _set?: Maybe<TasksSetInput>;
  pk_columns: TasksPkColumnsInput;
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
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: CategoriesAggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "tasks" */
  tasks: Array<Tasks>;
  /** fetch aggregated fields from the table: "tasks" */
  tasks_aggregate: TasksAggregate;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>;
};


export type QueryRootCategoriesArgs = {
  distinct_on?: Maybe<Array<CategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CategoriesOrderBy>>;
  where?: Maybe<CategoriesBoolExp>;
};


export type QueryRootCategoriesAggregateArgs = {
  distinct_on?: Maybe<Array<CategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CategoriesOrderBy>>;
  where?: Maybe<CategoriesBoolExp>;
};


export type QueryRootCategoriesByPkArgs = {
  id: Scalars['Int'];
};


export type QueryRootTasksArgs = {
  distinct_on?: Maybe<Array<TasksSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TasksOrderBy>>;
  where?: Maybe<TasksBoolExp>;
};


export type QueryRootTasksAggregateArgs = {
  distinct_on?: Maybe<Array<TasksSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TasksOrderBy>>;
  where?: Maybe<TasksBoolExp>;
};


export type QueryRootTasksByPkArgs = {
  id: Scalars['Int'];
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: CategoriesAggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "tasks" */
  tasks: Array<Tasks>;
  /** fetch aggregated fields from the table: "tasks" */
  tasks_aggregate: TasksAggregate;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>;
};


export type SubscriptionRootCategoriesArgs = {
  distinct_on?: Maybe<Array<CategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CategoriesOrderBy>>;
  where?: Maybe<CategoriesBoolExp>;
};


export type SubscriptionRootCategoriesAggregateArgs = {
  distinct_on?: Maybe<Array<CategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CategoriesOrderBy>>;
  where?: Maybe<CategoriesBoolExp>;
};


export type SubscriptionRootCategoriesByPkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionRootTasksArgs = {
  distinct_on?: Maybe<Array<TasksSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TasksOrderBy>>;
  where?: Maybe<TasksBoolExp>;
};


export type SubscriptionRootTasksAggregateArgs = {
  distinct_on?: Maybe<Array<TasksSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TasksOrderBy>>;
  where?: Maybe<TasksBoolExp>;
};


export type SubscriptionRootTasksByPkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "tasks" */
export type Tasks = {
  __typename?: 'tasks';
  id: Scalars['Int'];
  isDone: Scalars['Boolean'];
  title: Scalars['String'];
};

/** aggregated selection of "tasks" */
export type TasksAggregate = {
  __typename?: 'tasks_aggregate';
  aggregate?: Maybe<TasksAggregateFields>;
  nodes: Array<Tasks>;
};

/** aggregate fields of "tasks" */
export type TasksAggregateFields = {
  __typename?: 'tasks_aggregate_fields';
  avg?: Maybe<TasksAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<TasksMaxFields>;
  min?: Maybe<TasksMinFields>;
  stddev?: Maybe<TasksStddevFields>;
  stddev_pop?: Maybe<TasksStddevPopFields>;
  stddev_samp?: Maybe<TasksStddevSampFields>;
  sum?: Maybe<TasksSumFields>;
  var_pop?: Maybe<TasksVarPopFields>;
  var_samp?: Maybe<TasksVarSampFields>;
  variance?: Maybe<TasksVarianceFields>;
};


/** aggregate fields of "tasks" */
export type TasksAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TasksSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type TasksAvgFields = {
  __typename?: 'tasks_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "tasks". All fields are combined with a logical 'AND'. */
export type TasksBoolExp = {
  _and?: Maybe<Array<TasksBoolExp>>;
  _not?: Maybe<TasksBoolExp>;
  _or?: Maybe<Array<TasksBoolExp>>;
  id?: Maybe<IntComparisonExp>;
  isDone?: Maybe<BooleanComparisonExp>;
  title?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "tasks" */
export enum TasksConstraint {
  /** unique or primary key constraint */
  TodosPkey = 'todos_pkey'
}

/** input type for incrementing numeric columns in table "tasks" */
export type TasksIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "tasks" */
export type TasksInsertInput = {
  id?: Maybe<Scalars['Int']>;
  isDone?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TasksMaxFields = {
  __typename?: 'tasks_max_fields';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type TasksMinFields = {
  __typename?: 'tasks_min_fields';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tasks" */
export type TasksMutationResponse = {
  __typename?: 'tasks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tasks>;
};

/** on conflict condition type for table "tasks" */
export type TasksOnConflict = {
  constraint: TasksConstraint;
  update_columns?: Array<TasksUpdateColumn>;
  where?: Maybe<TasksBoolExp>;
};

/** Ordering options when selecting data from "tasks". */
export type TasksOrderBy = {
  id?: Maybe<OrderBy>;
  isDone?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

/** primary key columns input for table: tasks */
export type TasksPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "tasks" */
export enum TasksSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  IsDone = 'isDone',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "tasks" */
export type TasksSetInput = {
  id?: Maybe<Scalars['Int']>;
  isDone?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type TasksStddevFields = {
  __typename?: 'tasks_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type TasksStddevPopFields = {
  __typename?: 'tasks_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type TasksStddevSampFields = {
  __typename?: 'tasks_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type TasksSumFields = {
  __typename?: 'tasks_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "tasks" */
export enum TasksUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  IsDone = 'isDone',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type TasksVarPopFields = {
  __typename?: 'tasks_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type TasksVarSampFields = {
  __typename?: 'tasks_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type TasksVarianceFields = {
  __typename?: 'tasks_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type UpdateTaskMutationVariables = Exact<{
  id: Scalars['Int'];
  isDone?: Maybe<Scalars['Boolean']>;
}>;


export type UpdateTaskMutation = (
  { __typename?: 'mutation_root' }
  & { update_tasks_by_pk?: Maybe<(
    { __typename?: 'tasks' }
    & Pick<Tasks, 'isDone'>
  )> }
);


export const UpdateTaskDocument = gql`
    mutation UpdateTask($id: Int!, $isDone: Boolean) {
  update_tasks_by_pk(pk_columns: {id: $id}, _set: {isDone: $isDone}) {
    isDone
  }
}
    `;
export type UpdateTaskMutationFn = Apollo.MutationFunction<UpdateTaskMutation, UpdateTaskMutationVariables>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *      isDone: // value for 'isDone'
 *   },
 * });
 */
export function useUpdateTaskMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, options);
      }
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<UpdateTaskMutation, UpdateTaskMutationVariables>;