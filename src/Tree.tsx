import React, {
  ChangeEventHandler,
  memo,
  useContext,
  useEffect,
  useState,
} from "react";

interface ComponentProps {
  data: any;
  depI?: number;
  changeParentStatus?: any;
  activeLink: any;
  renderData: any;
}

const TreeNode: React.FC<ComponentProps> = memo((props) => {
  const depI = props.depI || 0;

  const deepAllChecked = (list: any, checked: boolean) => {
    list.forEach((t: any) => {
      t.checked = checked;
      t.half = false;
      t.children ? deepAllChecked(t.children,checked) : null;
    });
  };

  const onChange = (t: any, e: any) => {
    const checked = e.target.checked;
    t.checked = checked;
    t.half = false;
    if (t.children) {
      /* 递归更新子节点状态 */
      deepAllChecked(t.children,checked);
    }
    if (t.parentId){
      /* 递归更新父节点状态 */
      changeParentStatus(t.parentId);
    } else {
      props.renderData()
    }
   
  };

  const changeParentStatus = (parentId: any, halfStatus: boolean = false) => {
     if (!parentId) return;

    const currentT = props.activeLink[parentId];
    let half = currentT.children.some((t: any) => t.checked) ? true : false;
    currentT.checked = currentT.children.some((t: any) => !t.checked) ? false : true;

     /* 子节点有任何一个选中 并且 当前父节点不是选中状态下为半选 */
    currentT.half = (half && !currentT.checked) || halfStatus;

    if (currentT.parentId) {
      changeParentStatus(currentT.parentId, currentT.half);
    } else {
      props.renderData();
    }
  };

  return (
    <div style={{ paddingLeft: 25 }}>
      {props.data.map((t: any) => {
        return (
          <div key={t.key}>
            <div style={{ marginBottom: 10 }}>
              <label>
                <input
                  className={t.half ? 'half' : ''}
                  type="checkbox"
                  checked={t.checked || false}
                  onChange={onChange.bind(null, t)}
                />
                {t.title}
              </label>
            </div>

            {t.children ? (
              <TreeNode
                {...props}
                changeParentStatus={changeParentStatus}
                data={t.children}
                depI={depI + 1}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
});

const Tree = memo((props: any) => {
  const [data, setData] = useState([]);
  const [activeLink, setActiveLink] = useState({});
  function deepC(list: any, obj: any = {}, parentId: any = null) {
    return list.reduce((t: any, n: any) => {
      n.checked = false;
      n.parentId = parentId;
      t[n.key] = n;
      if (n.children) {
        deepC(n.children, obj, n.key);
      }
      return t;
    }, obj);
  }

  const renderData = () => {
    setData([...data]);
  };

  useEffect(() => {
    setData(props.data);
    const o = deepC([...props.data]);
    setActiveLink(o);
  }, [props.data]);

  return (
    <TreeNode
      renderData={renderData}
      activeLink={activeLink}
      data={data}
    />
  );
});

export default Tree;
