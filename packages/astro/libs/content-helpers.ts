export function createSectionProps(index: number, name?: string) {
    return {
        id: `section-${index}`,
        class: `section--${index} section--${name || 'unknown'}`,
    };
}

export function createDynamicModuleBuilder(moduleComponents: Record<string, any>) {
    const buildModule = (moduleName: string, data: any, index: number) => {
        const Component = moduleComponents[moduleName];
        if (!Component || !data) return null;

        const props = createSectionProps(index, moduleName);
        const { type, ...rest } = data;

        return {
            Component,
            props,
            data: rest,
            type,
        };
    };

    const buildPageModules = (modulesData: Array<{ name: string; data: any }>) => {
        return modulesData
            .map(({ name, data }, index) => {
                return buildModule(name, data?.data, index);
            })
            .filter(Boolean);
    };

    return {
        buildModule,
        buildPageModules,
    };
}
