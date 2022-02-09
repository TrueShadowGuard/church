import Events from "../db/models/Events.js";
import getNextCounterValue from "../db/utils/getNextCounterValue.js";

export default async function createExampleEvents(count) {
  const content = "<h1>LOREM IPSUM DOLOR SIT AMET</h1>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Non tellus orci ac auctor augue mauris augue neque gravida.</p>\n<p>Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi porta lorem mollis aliquam. Quis vel eros donec ac odio tempor orci dapibus ultrices. Elementum eu facilisis sed odio morbi. Nam at lectus urna duis convallis convallis tellus id. Feugiat pretium nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam lacus. Sit amet porttitor eget.</p>\n<img alt=\"\" src=\"https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80\">\n<h2>LOREM IPSUM DOLOR SIT AMET</h2>\n<p>Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi porta lorem mollis aliquam. Quis vel eros donec ac odio tempor orci dapibus ultrices. Elementum eu facilisis sed odio morbi. Nam at lectus urna duis convallis convallis tellus id. Feugiat pretium nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam lacus. Sit amet porttitor eget.</p>\n<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat.</blockquote>\n<ul>\n    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>\n    <li>Aenean vel elit scelerisque mauris. Imperdiet sed euismod</li>\n    <li>Purus sit amet luctus venenatis lectus magna</li>\n</ul>";
  for (let i = 0; i < count; i++) {
    const id = await getNextCounterValue("upcomingEvents");
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    await Events.create(
      {
        header: "EXAMPLE SERMON" + i,
        description: "lorem ipsum dolor sit amet, consectetur adip",
        date: +date,
        _id: id,
        place: "No 233 Main St. New York,\n United States",
        content
      });
  }
}
