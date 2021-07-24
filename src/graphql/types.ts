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
  /** delete data from the table: "tasks" */
  delete_tasks?: Maybe<TasksMutationResponse>;
  /** delete single row from the table: "tasks" */
  delete_tasks_by_pk?: Maybe<Tasks>;
  /** insert data into the table: "tasks" */
  insert_tasks?: Maybe<TasksMutationResponse>;
  /** insert a single row into the table: "tasks" */
  insert_tasks_one?: Maybe<Tasks>;
  /** update data of the table: "tasks" */
  update_tasks?: Maybe<TasksMutationResponse>;
  /** update single row of the table: "tasks" */
  update_tasks_by_pk?: Maybe<Tasks>;
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
  /** fetch data from the table: "tasks" */
  tasks: Array<Tasks>;
  /** fetch aggregated fields from the table: "tasks" */
  tasks_aggregate: TasksAggregate;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>;
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
  /** fetch data from the table: "tasks" */
  tasks: Array<Tasks>;
  /** fetch aggregated fields from the table: "tasks" */
  tasks_aggregate: TasksAggregate;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>;
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

export type UpdateTaskMutationMutationVariables = Exact<{
  id: Scalars['Int'];
  isDone?: Maybe<Scalars['Boolean']>;
}>;


export type UpdateTaskMutationMutation = (
  { __typename?: 'mutation_root' }
  & { update_tasks_by_pk?: Maybe<(
    { __typename?: 'tasks' }
    & Pick<Tasks, 'isDone'>
  )> }
);


export const UpdateTaskMutationDocument = gql`
    mutation UpdateTaskMutation($id: Int!, $isDone: Boolean) {
  update_tasks_by_pk(pk_columns: {id: $id}, _set: {isDone: $isDone}) {
    isDone
  }
}
    `;
export type UpdateTaskMutationMutationFn = Apollo.MutationFunction<UpdateTaskMutationMutation, UpdateTaskMutationMutationVariables>;

/**
 * __useUpdateTaskMutationMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutationMutation, { data, loading, error }] = useUpdateTaskMutationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      isDone: // value for 'isDone'
 *   },
 * });
 */
export function useUpdateTaskMutationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutationMutation, UpdateTaskMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaskMutationMutation, UpdateTaskMutationMutationVariables>(UpdateTaskMutationDocument, options);
      }
export type UpdateTaskMutationMutationHookResult = ReturnType<typeof useUpdateTaskMutationMutation>;
export type UpdateTaskMutationMutationResult = Apollo.MutationResult<UpdateTaskMutationMutation>;
export type UpdateTaskMutationMutationOptions = Apollo.BaseMutationOptions<UpdateTaskMutationMutation, UpdateTaskMutationMutationVariables>;