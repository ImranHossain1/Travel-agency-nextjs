"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { showSidebarDrawer } from "@/redux/slices/sidebarSlice";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Menu, Typography } from "antd";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const { Header, Content } = Layout;
const { Title } = Typography;

const Navbar = ({
  items,
  hasSider,
  session,
}: {
  items: { key: string; label: string; href: string }[];
  hasSider?: boolean;
  session?: boolean;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout className="layout">
      <Header className="flex items-center">
        {hasSider && (
          <Button
            type="primary"
            className="lg:hidden"
            onClick={() => {
              dispatch(showSidebarDrawer());
            }}
          >
            <MenuOutlined />
          </Button>
        )}
        <Content>
          <Link href="/">
            <Title
              className={`m-0 text-white ${
                hasSider && "text-center lg:text-left"
              }`}
            >
              Travel BD.com
            </Title>
          </Link>
        </Content>
        <Menu
          className="lg:block hidden"
          disabledOverflow
          theme="dark"
          mode="horizontal"
          selectedKeys={[pathname]}
        >
          {items?.map((item) => (
            <Menu.Item key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </Menu.Item>
          ))}

          {session ? (
            <>
              <Link
                href="/dashboard"
                type="primary"
                className="mr-2 text-gray-300"
              >
                Dashboard
              </Link>
              <Button
                type="primary"
                onClick={() => {
                  signOut();
                }}
              >
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Button
                type="primary"
                className="mr-2"
                onClick={() => {
                  router.push("/login");
                }}
              >
                Sign In
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  router.push("/signup");
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Menu>

        <Button type="primary" className="lg:hidden" onClick={showDrawer}>
          <MenuOutlined />
        </Button>
        <Drawer title="Menu" placement="right" onClose={onClose} visible={open}>
          <Menu
            theme="light"
            mode="vertical"
            selectedKeys={[pathname]}
            style={{ borderRight: 0 }}
          >
            {items?.map((item) => (
              <Menu.Item key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
