import React from "react";


import ColourItem from "./colour";

export default function ColoursPage() {
  return (
    <div>
      <h1 className="intro-h1 large">Colours</h1>
      <div>
        <div>
          <h1>Overview</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit .
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit:
          </p>
          <ul className="list">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit 
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit 
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit 
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit 
            </li>
          </ul>
          <h2 className="mt-48">Primary Colours</h2>
          <div className="colour">
            <ColourItem
              class="red"
              name="Red"
              hex="#D0021B"
              rgb="rgb (208, 1, 27)"
            />
            <ColourItem
              class="green"
              name="Green"
              hex="#40A22A"
              rgb="rgb (64, 162, 42)"
            />
            <ColourItem
              class="black"
              name="Black"
              hex="#262626"
              rgb="rgb (38, 38, 38)"
            />
            <ColourItem
              class="teal"
              name="Teal"
              hex="#2B7586"
              rgb="rgb (43, 117, 134)"
            />
          </div>

          <h2 className="mt-72">Secondary Colours</h2>
          <div className="colour">
            <ColourItem
              class="dark-red"
              name="Dark red"
              hex="#AD1220"
              rgb="rgb (173, 18, 32)"
            />
            <ColourItem
              class="dark-green"
              name="Dark green"
              hex="#05853A"
              rgb="rgb (5, 133, 58)"
            />
            <ColourItem
              class="grey"
              name="Grey"
              hex="#5C747A"
              rgb="rgb (92, 116, 122)"
            />
            <ColourItem
              class="dark-blue"
              name="Dark blue"
              hex="#193351"
              rgb="rgb (25, 51, 81)"
            />
          </div>

          <h2 className="mt-72">Tints</h2>
          <div className="colour">
            <ColourItem
              class="dark-red-tint"
              name="Dark red Tint"
              hex="#CC434F"
              rgb="rgb (204, 67, 79)"
            />
            <ColourItem
              class="dark-green-tint"
              name="Dark green Tint"
              hex="#44A46C"
              rgb="rgb (68, 164, 108)"
            />
            <ColourItem
              class="grey-tint"
              name="Grey Tint"
              hex="#9CAAAE"
              rgb="rgb (156, 170, 174)"
            />
            <ColourItem
              class="dark-blue-tint"
              name="Dark blue Tint"
              hex="#475C74"
              rgb="rgb (71, 92, 116)"
            />
            <ColourItem
              class="teal-tint"
              name="Teal Tint"
              hex="#6A9EAA"
              rgb="rgb (106, 158, 170)"
            />
          </div>

          <h2 className="mt-72">Neutral colours / Greys</h2>
          <div className="colour">
            <ColourItem
              class="white"
              name="White"
              hex="#FFFFFF"
              rgb="rgb (255, 255, 255)"
            />
            <ColourItem
              class="gry-background"
              name="Grey-10"
              hex="#F6F6F6"
              rgb="rgb (246, 246, 246)"
            />
            <ColourItem
              class="grey-mid"
              name="Grey-20"
              hex="#E0E0E0"
              rgb="rgb (224, 224, 224)"
            />
            <ColourItem
              class="grey-divider"
              name="Grey-30"
              hex="#BBBBBB"
              rgb="rgb (187, 187, 187)"
            />
            <ColourItem
              class="disabled"
              name="Grey-40"
              hex="#717171"
              rgb="rgb (113, 113, 113)"
            />
          </div>

          <h2 className="mt-72">System / UI colours</h2>
          <div className="colour">
            <ColourItem
              class="red"
              name="Red"
              hex="#D0021B"
              rgb="rgb (208, 1, 27)"
            />
            <ColourItem
              class="mustard"
              name="Mustard"
              hex="#F1B13B"
              rgb="rgb (241, 177, 59)"
            />
            <ColourItem
              class="green"
              name="Green"
              hex="#40A22A"
              rgb="rgb (64, 162, 42)"
            />
            <ColourItem
              class="teal-tint"
              name="Teal tint"
              hex="#6A9EAA"
              rgb="rgb (106, 158, 170)"
            />
          </div>
          <h2 className="mt-72">Usage</h2>

          <h3>Primary colours</h3>

          <p>
            These colours should be the most prominent in your
            communications – either as a background colour, or as the
            focal point in a design. These are used for key and
            reoccurring site ‘furniture’ such as: navigation, footer, text
            and call to actions.
          </p>
          <p>The corporate logo must always sit on White.</p>
          <p>
            Black is our preferred black for digital use. Its softer tone
            avoids harsh clashes with Dunant Red and White. It should be
            used in all instances when you need black, other than on type
            below 10pt. In this case, use Full Black.
          </p>
          <p>Below is top level guidance for primary colours usage.</p>
          <div className="colour">
            <ColourItem
              class="red"
              name="Red"
              hex="#D0021B"
              rgb="rgb (208, 1, 27)"
            />
          </div>
          <ul className="list">
            <li>Used for buttons, labels and accent colours</li>
            <li>Active and hovering states for navigation</li>
            <li>
              Used in system colours for errors and destructive UI states
            </li>
            <li>Only used on homepage hero as a solid block</li>
          </ul>
          <div className="colour">
            <ColourItem
              class="green"
              name="Green"
              hex="#40A22A"
              rgb="rgb (64, 162, 42)"
            />
          </div>
          <ul className="list">
            <li>Used for primary links, downloads and extrnal links</li>
            <li>First Aid elements and logo</li>
            <li>Success and pass in system colours for UI states </li>
          </ul>
          <div className="colour">
            <ColourItem
              class="black"
              name="Black"
              hex="#262626"
              rgb="rgb (38, 38, 38)"
            />
          </div>

          <ul className="list">
            <li>Used for text and iconography</li>
            <li>Only used as a solid colour for footer background</li>
            <li>Can be used for button focused state</li>
          </ul>
          <div className="colour">
            <ColourItem
              class="teal"
              name="Teal"
              hex="#2B7586"
              rgb="rgb (43, 117, 134)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}