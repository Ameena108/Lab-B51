   for (const account of accounts) await prisma.account.create({ data: account })