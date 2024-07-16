import { redirect } from 'next/navigation';

export default function RedirectExample() {
  const login = async (formData: FormData) => {
    'use server'
    const userName = formData.get('userName')

    try {
      // Call database
    } catch (error) {
      // Handle errors
    }

    if(userName) {
      redirect(encodeURI(`/lhs/routing/redirecting/${userName}`))
    }
  }

  return (
    <div>
      <form action={login}>
        <label htmlFor="userName">user name:</label>
        <input type="text" id="userName" name="userName" /><br /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
