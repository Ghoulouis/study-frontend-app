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
        title: "Swap",
        url: "/swap",
        children: [],
        type: 0,
        target: undefined,
    },
    {
        title: "Position Manager",
        url: "/position-manager",
        children: [],
        type: 0,
        target: undefined,
    },
    {
        title: "AI Wallet",
        url: "/ai-wallet",
        type: 0,
        target: undefined,
        children: [
            {
                title: "Dashboard",
                url: "/ai-wallet/dashboard",
                type: 0,
                target: undefined,
            },
            {
                title: "Settings",
                url: "/ai-wallet/settings",
                type: 0,
                target: undefined,
            },
        ],
    },
    {
        title: "Faucet",
        url: "/faucet",
        children: [],
        type: 0,
        target: undefined,
        disable: true,
    },
    {
        title: "Trial Trek Campaign",
        url: "/campaign",
        type: 0,
        target: undefined,
        children: [
            {
                title: "Lottery",
                url: "/campaign/lottery",
                type: 0,
                target: undefined,
            },
            {
                title: "Leaderboard",
                url: "/campaign/leaderboard",
                type: 0,
                target: undefined,
            },
        ],
    },
];
