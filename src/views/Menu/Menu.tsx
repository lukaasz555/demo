import React, { FC } from 'react';
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

	const getMenu = (): MenuItemProps[] => {
		if (data) {
			return data.allCourses;
		} else {
			return [];
		}
	};

	const capitalLetter = (string: string): string => {
		const arr = Array.from(string);
		const firstLetter = arr.slice(0, 1).toString().toUpperCase();
		arr.splice(0, 1, firstLetter);
		return arr.join('');
	};

	return (
		<Wrapper>
			{!data ? null : (
				<>
					<nav>
						{getCategories().map((c: string) => (
							<button onClick={(e) => console.log(c)}>
								{capitalLetter(c)}
							</button>
						))}
					</nav>
					<div>
						{getMenu().map((i) => (
							<MenuItem
								id={i.id}
								name={i.name}
								price={i.price}
								desc={i.desc}
								category={i.category}
							/>
						))}
					</div>
				</>
			)}

			{loading ? <Loader /> : null}
			{error ? <Error /> : null}
		</Wrapper>
	);
};

export default Menu;
