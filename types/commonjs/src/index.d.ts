import React from 'react';
export interface ToastConfig {
    position?: 'top' | 'center' | 'bottom';
    duration?: number;
    stack?: boolean;
}
export interface ToastOptions extends ToastConfig {
    readonly id: string;
    title: string;
    icon?: any;
    type?: 'success' | 'info' | 'error';
}
export declare const ToastProvider: React.FC<{
    children: React.ReactNode;
    config?: ToastConfig;
}>;
declare const _default: (config: Omit<ToastOptions, "id">) => void;
export default _default;
//# sourceMappingURL=index.d.ts.map