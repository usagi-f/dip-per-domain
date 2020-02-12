import {CommonRoute} from '../../integrate/interface';

// entrypoints
import Sample from '../view/entrypoints/Sample';

const route: CommonRoute = [
    {
        path: '/about',
        children: Sample,
    },
];

export default route;
