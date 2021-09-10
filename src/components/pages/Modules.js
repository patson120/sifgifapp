import React from 'react';
import { ModuleSigif } from './ModuleSigif';
import { MODULES } from './Constants';

export const Modules = () => {
    return (
        <div style={{ margin: "50px auto" }}>
            <ModuleSigif object={MODULES} />
        </div>
    );
}
