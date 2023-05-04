import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const noteRouter = createTRPCRouter({
    getAll: protectedProcedure.query(({ ctx, input }) => {
        return ctx.prisma.note.findMany({
            where: {
                topicId: ctx.session.topic.id,
            },
        });
    }),
    create: protectedProcedure
        .input(
            z.object({
                title: z.string(),
                content: z.string(),
                topicId: z.string(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.note.create({
                data: {
                    title: input.title,
                    topicId: input.topicId,
                    content: input.content,
                },
            });
        }),
});
