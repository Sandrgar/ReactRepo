import useSwr from 'swr'

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = res.json()
    return data
}

function useGithubUser() {
    const { data, error } = useSwr(`https://api.github.com/users`, fetcher)

    return {
        users: data,
        error,
        isLoading: !data && !error

    }
}

export default useGithubUser