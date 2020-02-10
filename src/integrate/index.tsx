import * as React from 'react';
import {render} from 'react-dom';

// Domain 1
import Sample from '../domain1/view/entrypoints/Sample';

class EntryPoint extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <div>
                <Sample />
            </div>
        );
    }
}

render(<EntryPoint />, document.getElementById('app'));
