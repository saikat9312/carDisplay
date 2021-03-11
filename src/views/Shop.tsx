import React from "react";
import { Block, Text } from "vcc-ui";

function Shop(props: any) {
  return (
    <div className="Shop">
      <Block extend={{ textAlign: "center" }}>
        <Text variant="hillary" subStyle="emphasis">
          Shop {props.match.params.id}
        </Text>

        <Text variant="bates" subStyle="inline-link">
          From Volvo Cars.
        </Text>
      </Block>
    </div>
  );
}

export default Shop;
