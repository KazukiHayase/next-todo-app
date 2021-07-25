import React from "react"
import Link from 'next/link'
import { useFetchCategoriesQuery } from "src/graphql/types";
import { useRouter } from "next/router";
import style from './style.module.scss'


export const Sidebar: React.VFC = () => {
  const { data, loading, error } = useFetchCategoriesQuery();
  const router = useRouter();
  const { categoryId } = router.query;

  return (
    <div className={style.sidebar}>
      <ul>
        {data?.categories.map(category => (
          <li
            key={category.id}
            className={[
              String(category.id) === categoryId ? style.active : ''
            ].join(' ')}
          >
            <Link href={`/tasks/${category.id}`}>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
