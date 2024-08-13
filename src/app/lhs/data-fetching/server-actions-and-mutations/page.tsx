import { redirect } from 'next/navigation';
import { SubmitButton } from '@/component/lhs/SubmitButton';
import { delay } from '@/utils/common';

export default function Page() {
  const login = async (formData: FormData) => {
    'use server'
    const userName = formData.get('userName')

    await delay()

    if(userName) {
      redirect(encodeURI(`/lhs/routing/redirecting/${userName}`))
    }
  }

  return (
    <div>
      <form action={login}>
        <label htmlFor="userName">user name:</label>
        <input type="text" id="userName" name="userName" /><br /><br />
        <SubmitButton />
      </form>
    </div>
  )
}
