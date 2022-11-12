import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Loader from '../../components/atoms/Loader/Loader';
import { useQuery } from 'graphql-hooks';
import MenuButton from '../../components/atoms/MenuButton/MenuButton';
import Error from '../../components/atoms/Error/Error';
import MenuItem from '../../components/atoms/MenuItem/MenuItem';

const Wrapper = styled.div`
	margin-top: 2em;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 30vh;
`;

const menu_query = `
{
	allCourses {
	  id
	  name
	  price
	  desc
	  category
	}
  }
`;

interface MenuItemProps {
	name: string;
	price: number;
	desc?: string;
	category: string;
	id: string;
}

const Menu: FC = () => {
	const { loading, error, data } = useQuery(menu_query);
	const [menu, setMenu] = useState<MenuItemProps[] | []>([]);

	const getCategories = (): string[] => {
		if (data) {
			const res: string[] = Array.from(
				new Set(data.allCourses.map((i: { category: string }) => i.category))
			);
			return res;
		} else {
			return [];
		}
	};

	useEffect(() => {
		if (data) {
			const def = data.allCourses.filter(
				(i: MenuItemProps) => i.category === 'starters'
			);
			setMenu(
				def.sort((a: MenuItemProps, b: MenuItemProps) => b.price - a.price)
			);
		}
	}, [data]);

	const capitalLetter = (string: string): string => {
		const arr = Array.from(string);
		const firstLetter = arr.slice(0, 1).toString().toUpperCase();
		arr.splice(0, 1, firstLetter);
		return arr.join('');
	};

	const handleMenu = (category: string) => {
		if (data) {
			const filtered = data.allCourses.filter(
				(i: MenuItemProps) => i.category === category
			);
			setMenu(filtered);
		}
	};

	return (
		<Wrapper>
			{!data ? null : (
				<nav>
					{getCategories().map((c: string) => (
						<button key={c} onClick={(e) => handleMenu(c)}>
							{capitalLetter(c)}
						</button>
					))}
				</nav>
			)}

			{data
				? menu.map((i: MenuItemProps) => (
						<MenuItem
							id={i.id}
							name={i.name}
							price={i.price}
							desc={i.desc}
							category={i.category}
						/>
				  ))
				: null}

			{loading ? <Loader /> : null}
			{error ? <Error /> : null}
		</Wrapper>
	);
};

export default Menu;
