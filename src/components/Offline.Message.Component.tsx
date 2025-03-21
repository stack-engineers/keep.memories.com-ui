import React from "react";

const OfflineMessageComponent: React.FunctionComponent = (): any => {
  return window.navigator.onLine ? (
    ""
  ) : (
    <>
      <aside className="offline-message-component">
        <p>You are currently offline!</p>
      </aside>
    </>
  );
};

export default OfflineMessageComponent;
