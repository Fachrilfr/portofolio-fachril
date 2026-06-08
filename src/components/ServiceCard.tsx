/**
 * @copyright 2025 fachrilfrmnsyh
 * @license Apache-2.0
 */

import type { ServiceType } from "@/types";

export const ServiceCard = ({ service }: { service:
    ServiceType }) => { 'service is defined but never used.'
        return (
            <div className='flex items-start justify-between rounded-2xl border border-zinc-200 dark:border-neutral-700 p-8 bg-zinc-50/50 dark:bg-neutral-900/30 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-300 hover:border-primary dark:hover:border-primary relative'>
                <div>
                    <h3 className='text-lg font-medium text-zinc-900 dark:text-white mb-1'>{service.title}</h3>

                    <p className='text-zinc-600 dark:text-neutral-300 mb-3'>{service.desc}</p>

                    <span className='text-sm lining-nums text-zinc-500 dark:text-neutral-400 font-medium uppercase tracking-wide'>{service.projects}</span>
                </div>

                <div className='shrink-0'>{service.icon}</div>
            </div>
        );
    };