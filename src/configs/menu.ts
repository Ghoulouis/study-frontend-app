/**
 * @todo TUrl for check route is in Project or not
 * @example
 * value = 0 => route insite project
 * value = 1 => route outsite project
 */
export type TUrl = 1 | 0;
export type TTargetLink = "_blank" | "_parent" | "_self" | "_top" | undefined;
export type TMenu = { title: string; url: string; target: TTargetLink; children: { title: string; url: string; type: TUrl; target: TTargetLink }[]; type: TUrl; disable?: true }[];
export const menu: TMenu = [
    {
        title: "Bridge",
        url: "/bridge",
        children: [],
        type: 0,
        target: undefined,
    },
    {
        title: "Bridge admin",
        url: "/bridge-admin",
        children: [],
        type: 0,
        target: undefined,
    },
];
