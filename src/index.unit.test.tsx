import React from "react";
import { createPullstate, InjectStoreState, PullstateProvider, Store, update, useStoreState } from "./index";
import ReactDOMServer from "react-dom/server";
import renderer from "react-test-renderer";

/*interface IUIStore {
  count: number;
  message: string;
}

interface IAllStores extends IPullstateAllStores {
  UIStore: Store<IUIStore>;
}*/

const UIStore = new Store({
  count: 5,
  message: "what what!",
});

const Pullstate = createPullstate({ UIStore });

const Counter = () => {
  const { UIStore: ui } = Pullstate.useStores();
  const count = useStoreState(ui, s => s.count);

  return (
    <div>
      <b>{count}</b> -{" "}
      <button
        onClick={() =>
          update(UIStore, s => {
            s.count++;
          })
        }
      >
        +
      </button>
    </div>
  );
};

const App = () => {
  const { UIStore: ui } = Pullstate.useStores();

  return (
    <div>
      <h1>Some test</h1>
      <InjectStoreState store={ui} on={s => s.message}>
        {message => (
          <div>
            <h2>{message}</h2>
            <input
              onChange={e =>
                update(ui, s => {
                  s.message = e.target.value;
                })
              }
              value={message}
            />
          </div>
        )}
      </InjectStoreState>
      <InjectStoreState store={ui}>{uiStore => <h2>{uiStore.count}</h2>}</InjectStoreState>
      <Counter />
    </div>
  );
};

describe("Pullstate with context", () => {
  // const Pullstate = createPullstate({ UIStore });
  const instance = Pullstate.instantiate();

  const ReactApp = (
    <PullstateProvider stores={instance.stores}>
      <App />
    </PullstateProvider>
  );

  it("Should be able to display its data", () => {
    expect(ReactDOMServer.renderToString(ReactApp)).toMatchSnapshot();
  });

  it("Should update the value");
});
