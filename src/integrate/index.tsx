import * as React from 'react';
import {render} from 'react-dom';

class EntryPoint extends React.PureComponent {
    public render(): JSX.Element {
        return <div>foo</div>;
    }
}

render(<EntryPoint />, document.getElementById('app'));
