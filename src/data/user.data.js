import { prisma } from '../lib/prisma.js';

export function cariByEmail(email) {
    return prisma.user.findUnique({where: { email }});
}

export function simpan(input) {
    return prisma.user.create({data: input, select: { id: true, email: true }});
}