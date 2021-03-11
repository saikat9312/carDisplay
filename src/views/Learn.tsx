import React from "react";
import { Block, Text } from "vcc-ui";

function Learn(props: any) {
  console.log("LEARN:", props);

  return (
    <div className="Learn">
      <Block extend={{ textAlign: "center" }}>
        <Text variant="hillary" subStyle="emphasis">
          Learn more about {props.match.params.id}
        </Text>

        <Text variant="bates" subStyle="inline-link">
          From Volvo Cars.
        </Text>
      </Block>
    </div>
  );
}

export default Learn;
