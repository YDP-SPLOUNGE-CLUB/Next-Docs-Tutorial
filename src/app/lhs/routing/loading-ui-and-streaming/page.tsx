import { faker } from '@faker-js/faker';
import { delay } from '@/utils/common';
import Delay from '../../../../../components/lhs/Delay';
import { Suspense } from 'react';

export default async function LoadingUIAndStreamingPage() {
  const randomName = faker.person.fullName(); // Rowan Nikolaus
  const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
  await delay(500);

  return (
    <div>
      <p>name: {randomName}</p>
      <p>email: {randomEmail}</p>
      <hr/>
      <Suspense fallback={<p>Loading name...</p>}>
        <Delay timeout={1500}>
          {randomName}
        </Delay>
      </Suspense>
      <hr/>
      <Suspense fallback={<p>Loading email...</p>}>
        <Delay timeout={3000}>
          {randomEmail}
        </Delay>
      </Suspense>
    </div>
  )
}

