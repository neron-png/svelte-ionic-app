// @ts-nocheck
import type { PageLoad } from './$types';

export const load = async ({ params }: Parameters<PageLoad>[0]) => {
    const { tab } = params;
    return { tab };
};