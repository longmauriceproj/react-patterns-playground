type Node = {
  id: number;
  name: string;
  nodes?: Node[];
};

interface FilesystemItemProps {
  node: Node;
}

export type { Node, FilesystemItemProps };
