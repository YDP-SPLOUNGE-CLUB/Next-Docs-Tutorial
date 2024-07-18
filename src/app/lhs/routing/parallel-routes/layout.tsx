import { ReactNode } from 'react';

export default function Layout({ children, team, about }: { children: ReactNode; team: ReactNode; about: ReactNode; }) {
  console.log(children, team, about)
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '100%' }}>
        {team}
      </div>
      <div style={{ width: '100%' }}>
        {children}
      </div>
      <div style={{ width: '100%' }}>
        {about}
      </div>
    </div>
  )
}
