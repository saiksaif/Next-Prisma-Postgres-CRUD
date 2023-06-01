import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
let allUsersList = [ { id: 0, email: '0' }];

async function main() {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
  allUsersList = allUsers;
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to CRUD Project with: Next.js, Prisma, PostGreSQL</h1>
      <hr />
      
      {/* Display List of Users */}
      <ul>
        {allUsersList.map((member) => (
          <li key={member.id}>
            {member.email}
          </li>
        ))}
      </ul>
      
      <h3>Add User</h3>
      
    </main>
  )
}
