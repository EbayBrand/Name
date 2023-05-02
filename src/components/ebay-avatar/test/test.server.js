import { use } from "chai";
import { composeStories } from "@storybook/marko/dist/testing";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../avatar.stories"; // import all stories from the stories file
const { Default, WithImage, SignedOut } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

use(require("chai-dom"));

it("renders defaults", async () => {
    await htmlSnap(Default);
});

it("renders with image", async () => {
    await htmlSnap(WithImage);
});

it("renders signed out", async () => {
    await htmlSnap(SignedOut);
});

it("renders 128 px with magenta", async () => {
    await htmlSnap(Default, { size: "128", color: "magenta" });
});
