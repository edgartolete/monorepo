import { Key } from 'swr'
import useSWRMutation, { SWRMutationConfiguration } from 'swr/mutation'

export function useMutation<T, U extends Key = Key>(
  url: string,
  options: SWRMutationConfiguration<T, Error> = {}
) {
  const mutator = async (url: string, { arg = {} }: { arg: U }) => {
    return await fetch(url, {
      method: 'POST',
      body: JSON.stringify(arg)
    }).then((res) => res.json())
  }

  return useSWRMutation<T, Error, Key, U>(url, mutator, { ...options })
}
