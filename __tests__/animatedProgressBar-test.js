import AnimatedProgressBar from "../src/app/ui/components/AnimatedProgressBar";
import {progressUtil} from "../src/app/shared/utils/progress-util";
import renderer from "react-test-renderer";
import React from "react";

test('renders correctly', () => {
    const tree = renderer.create(<AnimatedProgressBar/>).toJSON();
    expect(tree).toMatchSnapshot();
});


test('check values', () => {
    expect(progressUtil(5, 10, true)).toEqual(50);
})
