import FormLegend from '../FormLegend';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|FormLegend', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <FormLegend>Default</FormLegend>
    ))
    .add('disable styles', () => (
        <FormLegend disableStyles>Default</FormLegend>
    ));
